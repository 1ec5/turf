import { Units, BBox, Polygon, MultiPolygon, Feature, FeatureCollection, Point, Properties } from '@turf/helpers';

/**
 * http://turfjs.org/docs/#hexgrid
 */
export default function hexGrid(
    bbox: BBox,
    cellSide: number,
    options?: {
        units?: Units,
        triangles?: boolean,
        properties?: Properties,
        mask?: Feature<Polygon | MultiPolygon> | Polygon | MultiPolygon;
    }
): FeatureCollection<Polygon>;
