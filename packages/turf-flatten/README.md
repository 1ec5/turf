# @turf/flatten

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## flatten

Flattens any [GeoJSON](http://geojson.org/geojson-spec.html#geojson-objects) to a [FeatureCollection](http://geojson.org/geojson-spec.html#feature-collection-objects) inspired by [geojson-flatten](https://github.com/tmcw/geojson-flatten).

**Parameters**

-   `geojson` **[GeoJSON](http://geojson.org/geojson-spec.html#geojson-objects)** any valid GeoJSON Object

**Examples**

```javascript
var multiGeometry = turf.multiPolygon([
  [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
  [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
  [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
]);

var flatten = turf.flatten(multiGeometry);

//addToMap
var addToMap = [flatten]
```

Returns **[FeatureCollection](http://geojson.org/geojson-spec.html#feature-collection-objects)&lt;any>** all Multi-Geometries are flattened into single Features

<!-- This file is automatically generated. Please don't edit it directly:
if you find an error, edit the source file (likely index.js), and re-run
./scripts/generate-readmes in the turf project. -->

---

This module is part of the [Turfjs project](http://turfjs.org/), an open source
module collection dedicated to geographic algorithms. It is maintained in the
[Turfjs/turf](https://github.com/Turfjs/turf) repository, where you can create
PRs and issues.

### Installation

Install this module individually:

```sh
$ npm install @turf/flatten
```

Or install the Turf module that includes it as a function:

```sh
$ npm install @turf/turf
```
