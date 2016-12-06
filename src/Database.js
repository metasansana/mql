import beof from 'beof';
import Parser from './Parser';


/**
 * Database wraps around the node mongodb api
 * to allow statements to be parsed from strings.
 *
 * If parsing statments per request, the cache option should be used
 * so to avoid repeating the same computation per request.
 * @param {mongodb.Database} mdb
 * @param {boolean} [cache=true]
 */
class Database {

    constructor(mdb, cache = false) {

        beof({ mdb }).optional().object();

        this._mdb = mdb;
        this.shouldCache = cache;
        this.cache = Object.create(null);

    }

    static wrap(db, cache = false) {

        return new Database(db, cache);

    }

    /**
     * use a different database connection, cached statements will continue to use
     * the database they were created with.
     * @param {mongodb.Database} db
     */
    use(db) {

        this._mdb = db;
        return this;

    }

    /**
     * parse a statement, optionally caching it if configured to
     * do so.
     * @param {string} str
     * @param {object} [context=null] - optional context to create the statement with.
     * @returns {Statement}
     */
    parse(str, context = null) {

        var stmt;

        if (this.shouldCache = false) {

            stmt = Parser.parse(str);

        } else {

            if (this.cache[str])
                stmt = this.cache[str]
            else
                stmt = Parser.parse(str);

        }

        stmt.db = this._mdb;
        stmt.context = context;
        return stmt;

    }

}

export default Database
