import { Building, BuildingCategory } from 'typings/Building';
import { Vehicle, VehicleCategory } from 'typings/Vehicle';
import VueI18n from 'vue-i18n';

export interface ChartSummary {
    buildingsId: string;
    buildings: {
        [category: string]: Building[];
    };
    buildingCategories: {
        [category: string]: BuildingCategory;
    };
    buildingTypeNames: string[];
    buildingTypeColors: string[];
    vehiclesId: string;
    vehicles: {
        [type: string]: Vehicle[];
    };
    vehicleCategories: {
        [category: string]: VehicleCategory;
    };
    vehicleTypeNames: string[];
    vehicleTypeColors: string[];
    vehiclesByBuilding: {
        [building: string]: Vehicle[];
    };
}

export interface ChartSummaryMethods {
    $m(
        key: string,
        args?: {
            [key: string]: unknown;
        }
    ): VueI18n.TranslateResult;
    $sm(
        key: string,
        args?: {
            [key: string]: unknown;
        }
    ): VueI18n.TranslateResult;
}

export interface ChartSummaryComputed {
    personalCount: number;
}
