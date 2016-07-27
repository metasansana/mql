Temporary issues file.

* No date support at all.
* Joining on date fields are probably dangerous right now.

* Joins are more like an advanced form of mongoose population and
are limited
to left, inner and outer.

* All joins are 1 to 1 or 1 to * there is no * to n support!

* Assumes we are always working with arrays that means no support for findone etc.
