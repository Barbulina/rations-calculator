import { Ration } from '../shared/models/ration';

export enum RationType {
  lacteal = 'lácteos',
  cereals_flours_pulses_legumes_tubers = 'cereales, harinas, legumbres y tuberculos',
  fruits = 'frutas',
  vegetables = 'hortalizas',
  oily_and_dry_fruit = 'frutas secas y grasa',
  drinks = 'bebidas',
  others = 'otros'
}

export const RATIONS_INFO_LIST: Array<Ration> = [
  { name: 'cuajada', gramsToCarbohydrate: 200, bloodGlucoseIndex: 35, type: RationType.lacteal },
  { name: 'flan', gramsToCarbohydrate: 50, bloodGlucoseIndex: 0, type: RationType.lacteal },
  {
    name: 'hellado de crema',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 60,
    type: RationType.lacteal
  },
  {
    name: 'helado de hielo',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 65,
    type: RationType.lacteal
  },
  {
    name: 'helado sin ázucar añadido',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.lacteal
  },
  { name: 'kéfir', gramsToCarbohydrate: 200, bloodGlucoseIndex: 35, type: RationType.lacteal },
  {
    name: 'leche desnatada',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 32,
    type: RationType.lacteal
  },
  {
    name: 'leche semidesnatada',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 30,
    type: RationType.lacteal
  },
  {
    name: 'leche entera',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 27,
    type: RationType.lacteal
  },
  {
    name: 'leche condensada',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 61,
    type: RationType.lacteal
  },
  {
    name: 'leche en polvo',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: 30,
    type: RationType.lacteal
  },
  {
    name: 'nata líquida',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: undefined,
    type: RationType.lacteal
  },
  {
    name: 'natillas',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: undefined,
    type: RationType.lacteal
  },
  {
    name: 'petit suisse',
    gramsToCarbohydrate: 70,
    bloodGlucoseIndex: 40,
    type: RationType.lacteal
  },
  {
    name: 'queso fresco',
    gramsToCarbohydrate: 250,
    bloodGlucoseIndex: 35,
    type: RationType.lacteal
  },
  {
    name: 'queso de pasta, semi o curados`',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: 0,
    type: RationType.lacteal
  },
  {
    name: 'yogurt natural, entero o desnatado',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 35,
    type: RationType.lacteal
  },
  {
    name: 'yogurt desnatado sabores o con fruta',
    gramsToCarbohydrate: 125,
    bloodGlucoseIndex: 35,
    type: RationType.lacteal
  },
  {
    name: 'yogurt entero sabores o con fruta',
    gramsToCarbohydrate: 70,
    bloodGlucoseIndex: 35,
    type: RationType.lacteal
  },
  {
    name: 'yogurt líquido',
    gramsToCarbohydrate: 70,
    bloodGlucoseIndex: 40,
    type: RationType.lacteal
  },
  {
    name: 'yogur tipo actimel',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.lacteal
  },
  {
    name: 'yogur tipo actimel 0%',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 35,
    type: RationType.lacteal
  },
  {
    name: 'arroz, crudo',
    gramsToCarbohydrate: 13,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'arroz cocido',
    gramsToCarbohydrate: 38,
    bloodGlucoseIndex: 70,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'arroz integral, crudo',
    gramsToCarbohydrate: 13,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'arroz integral cocido',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 50,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'arroz hinchado para el desayuno',
    gramsToCarbohydrate: 12,
    bloodGlucoseIndex: 85,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'arroz salvaje, crudo',
    gramsToCarbohydrate: 13,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'arroz salvaje cocido',
    gramsToCarbohydrate: 34,
    bloodGlucoseIndex: 35,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'avena, crudo',
    gramsToCarbohydrate: 17,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'avena cocida',
    gramsToCarbohydrate: 34,
    bloodGlucoseIndex: 40,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'avena copos',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'boniato',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 50,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'cebada, cruda',
    gramsToCarbohydrate: 14,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'cebada cocida',
    gramsToCarbohydrate: 42,
    bloodGlucoseIndex: 45,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'centeno, crudo',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'centeno cocido',
    gramsToCarbohydrate: 38,
    bloodGlucoseIndex: 45,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'cereales desayuno',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 77,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'cereales desayuno rico en fibra',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 50,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'cuscús, crudo',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'cuscús cocido',
    gramsToCarbohydrate: 65,
    bloodGlucoseIndex: 65,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'fideos de arroz tipo Udon, cocido',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 50,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'fideos de soja cocidos',
    gramsToCarbohydrate: 40,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'galleta tipo digestiva',
    gramsToCarbohydrate: 16,
    bloodGlucoseIndex: 65,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'galleta tipo María',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 70,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'galleta tipo Principe',
    gramsToCarbohydrate: 14,
    bloodGlucoseIndex: 70,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'galleta sin azúcar',
    gramsToCarbohydrate: 18,
    bloodGlucoseIndex: 50,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'garbanzo, crudo',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'garbanzo cocido',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 35,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'Guisantes congelados,frescos o de lata',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'harina de trigo o de maíz',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 78,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'harina de centeno',
    gramsToCarbohydrate: 17,
    bloodGlucoseIndex: 45,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'harina de soja',
    gramsToCarbohydrate: 70,
    bloodGlucoseIndex: 25,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'hojaldre crudo',
    gramsToCarbohydrate: 30,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'hojaldre horneado',
    gramsToCarbohydrate: 24,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'judías blancas, crudo',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'judías blancas, cocido',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 35,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'lentejas, crudo',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'lentejas, cocido',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 35,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'maíz en lata',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 65,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'maíz en lata sin azúcar añadido',
    gramsToCarbohydrate: 90,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'maíz tostado, quicos',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'mijo, crudo',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'mijo cocido',
    gramsToCarbohydrate: 53,
    bloodGlucoseIndex: 70,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'müesli',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 65,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pan blanco',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 70,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pan centeno',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 65,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pan de molde',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 85,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pan hamburguesa o Frankfurt',
    gramsToCarbohydrate: 18,
    bloodGlucoseIndex: 85,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pan trigo integral',
    gramsToCarbohydrate: 23,
    bloodGlucoseIndex: 40,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pan rayado',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 70,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pan tostado o biscote',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 70,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pan bastoncitos',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 70,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pasta alimenticia, crudo',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pasta alimenticia, cocido',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 50,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'pasta al huevo, crudo',
    gramsToCarbohydrate: 16,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'patata cocida, hervida',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 65,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'patata al horno o asada',
    gramsToCarbohydrate: 35,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'patata frita',
    gramsToCarbohydrate: 30,
    bloodGlucoseIndex: 70,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'patata chips',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 95,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'puré de patata copos',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 90,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'puré de patata elaborado con leche',
    gramsToCarbohydrate: 80,
    bloodGlucoseIndex: 90,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'quinoa, crudo',
    gramsToCarbohydrate: 19,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'quinoa, cocido',
    gramsToCarbohydrate: 48,
    bloodGlucoseIndex: 35,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'sémola de trigo, crudo',
    gramsToCarbohydrate: 14,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'sémola de trigo, cocido',
    gramsToCarbohydrate: 90,
    bloodGlucoseIndex: 67,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'soja seca, cruda',
    gramsToCarbohydrate: 30,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'soja seca, hervido',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 15,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'sushi',
    gramsToCarbohydrate: 45,
    bloodGlucoseIndex: 42,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'tapioca, crudo',
    gramsToCarbohydrate: 12,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'tapioca, cocido',
    gramsToCarbohydrate: 33,
    bloodGlucoseIndex: 84,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'trigo sarraceno, crudo',
    gramsToCarbohydrate: 14,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'trigo sarraceno, cocido',
    gramsToCarbohydrate: 42,
    bloodGlucoseIndex: 40,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'trigo tierno, crudo',
    gramsToCarbohydrate: 16,
    bloodGlucoseIndex: undefined,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'trigo tierno, cocido',
    gramsToCarbohydrate: 39,
    bloodGlucoseIndex: 45,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'yuca cocida',
    gramsToCarbohydrate: 33,
    bloodGlucoseIndex: 55,
    type: RationType.cereals_flours_pulses_legumes_tubers
  },
  {
    name: 'aguacate',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: 10,
    type: RationType.fruits
  },
  {
    name: 'albaricoque',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 30,
    type: RationType.fruits
  },
  {
    name: 'arándano',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 25,
    type: RationType.fruits
  },
  {
    name: 'castaña, cruda',
    gramsToCarbohydrate: 30,
    bloodGlucoseIndex: 65,
    type: RationType.fruits
  },
  {
    name: 'castaña, tostada',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: 65,
    type: RationType.fruits
  },
  {
    name: 'cereza',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 25,
    type: RationType.fruits
  },
  {
    name: 'chirimoya',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'ciruela',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'coco fresco',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 45,
    type: RationType.fruits
  },
  {
    name: 'coco seco',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 45,
    type: RationType.fruits
  },
  {
    name: 'dátil',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 70,
    type: RationType.fruits
  },
  {
    name: 'frambuesa',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 25,
    type: RationType.fruits
  },
  {
    name: 'fresones',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 25,
    type: RationType.fruits
  },
  {
    name: 'granada',
    gramsToCarbohydrate: 70,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'grosella',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 25,
    type: RationType.fruits
  },
  {
    name: 'grosella negra',
    gramsToCarbohydrate: 140,
    bloodGlucoseIndex: 15,
    type: RationType.fruits
  },
  {
    name: 'higos',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'kiwi',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 50,
    type: RationType.fruits
  },
  {
    name: 'limón',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.fruits
  },
  {
    name: 'lichi',
    gramsToCarbohydrate: 70,
    bloodGlucoseIndex: 50,
    type: RationType.fruits
  },
  {
    name: 'mandarina',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 30,
    type: RationType.fruits
  },
  {
    name: 'mango',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 50,
    type: RationType.fruits
  },
  {
    name: 'manzana',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'manzana asada',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'melocotón',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'melocotón en conserva',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'melon',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 60,
    type: RationType.fruits
  },
  {
    name: 'membrillo',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'membrillo, dulce de ',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 65,
    type: RationType.fruits
  },
  {
    name: 'moras',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 25,
    type: RationType.fruits
  },
  {
    name: 'naranja',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'nectarina',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'níspero',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 65,
    type: RationType.fruits
  },
  {
    name: 'pera',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 30,
    type: RationType.fruits
  },
  {
    name: 'papaya',
    gramsToCarbohydrate: 125,
    bloodGlucoseIndex: 55,
    type: RationType.fruits
  },
  {
    name: 'paraguayo',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.fruits
  },
  {
    name: 'piña',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 45,
    type: RationType.fruits
  },
  {
    name: 'piña en conserva',
    gramsToCarbohydrate: 85,
    bloodGlucoseIndex: undefined,
    type: RationType.fruits
  },
  {
    name: 'piña en su jugo',
    gramsToCarbohydrate: 60,
    bloodGlucoseIndex: 50,
    type: RationType.fruits
  },
  {
    name: 'plátano',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 50,
    type: RationType.fruits
  },
  {
    name: 'sandía',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 75,
    type: RationType.fruits
  },
  {
    name: 'uva',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 45,
    type: RationType.fruits
  },
  {
    name: 'acelga',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'ajo',
    gramsToCarbohydrate: 40,
    bloodGlucoseIndex: 30,
    type: RationType.vegetables
  },
  {
    name: 'alcachofa',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 20,
    type: RationType.vegetables
  },
  {
    name: 'apio',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'apio-nabo',
    gramsToCarbohydrate: 500,
    bloodGlucoseIndex: undefined,
    type: RationType.vegetables
  },
  {
    name: 'berenjena',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 20,
    type: RationType.vegetables
  },
  {
    name: 'berro',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.vegetables
  },
  {
    name: 'berza',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.vegetables
  },
  {
    name: 'borraja',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.vegetables
  },
  {
    name: 'brócoli',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'calabacín',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'calabaza',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 75,
    type: RationType.vegetables
  },
  {
    name: 'cardo',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'cebolla',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'cebolla frita en aros',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: undefined,
    type: RationType.vegetables
  },
  {
    name: 'champiñón',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'col ácido',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.vegetables
  },
  {
    name: 'col bruselas, coliflor',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'escarola',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'endibia',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'espárragos blanco en conserva',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'espárragos verde',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'espinaca',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'grelos',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.vegetables
  },
  {
    name: 'judías verdes',
    gramsToCarbohydrate: 250,
    bloodGlucoseIndex: 30,
    type: RationType.vegetables
  },
  {
    name: 'lechuga',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'lombarda',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'nabo',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 30,
    type: RationType.vegetables
  },
  {
    name: 'pálmitos',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 20,
    type: RationType.vegetables
  },
  {
    name: 'pepino',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'pimiento rojo/verde',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'puerro',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'rábano',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'remolacha',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 30,
    type: RationType.vegetables
  },
  {
    name: 'repollo',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'ruibardo',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.vegetables
  },
  {
    name: 'setas',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'soja en brotes',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.vegetables
  },
  {
    name: 'tomate',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 30,
    type: RationType.vegetables
  },
  {
    name: 'zanahoria',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 30,
    type: RationType.vegetables
  },
  {
    name: 'zanahoria hervida',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: 85,
    type: RationType.vegetables
  },
  {
    name: 'zanahoria en conserve',
    gramsToCarbohydrate: 225,
    bloodGlucoseIndex: undefined,
    type: RationType.vegetables
  },
  {
    name: 'aceituna',
    gramsToCarbohydrate: 250,
    bloodGlucoseIndex: 15,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'albaricoque seco',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 35,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'almendra',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 15,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'almendra tostada',
    gramsToCarbohydrate: 140,
    bloodGlucoseIndex: 15,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'avellana',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: 15,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'cacahuete',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 15,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'ciruela pasa',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 40,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'dátil seco',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 70,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'higo seco',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 40,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'nuez',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'piñón',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: 15,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'pipas',
    gramsToCarbohydrate: 80,
    bloodGlucoseIndex: 35,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'pistacho',
    gramsToCarbohydrate: 80,
    bloodGlucoseIndex: 15,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'sésamo',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 35,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'uva pasa',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: 65,
    type: RationType.oily_and_dry_fruit
  },
  {
    name: 'bebida isotónica',
    gramsToCarbohydrate: 130,
    bloodGlucoseIndex: 78,
    type: RationType.drinks
  },
  {
    name: 'bebida refrescante tipo cola o sabores',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 70,
    type: RationType.drinks
  },
  {
    name: 'bebida refrescante tipo light o sin azucar',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'bebida cacao',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 34,
    type: RationType.drinks
  },
  {
    name: 'bebida de soja',
    gramsToCarbohydrate: 250,
    bloodGlucoseIndex: 30,
    type: RationType.drinks
  },
  {
    name: 'bebida energética',
    gramsToCarbohydrate: 80,
    bloodGlucoseIndex: 70,
    type: RationType.drinks
  },
  {
    name: 'bitter',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 70,
    type: RationType.drinks
  },
  {
    name: 'cava brut',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'cava seco o semi seco',
    gramsToCarbohydrate: 250,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'cerveza',
    gramsToCarbohydrate: 250,
    bloodGlucoseIndex: 110,
    type: RationType.drinks
  },
  {
    name: 'cerveza light',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'cerveza sin alcohol',
    gramsToCarbohydrate: 250,
    bloodGlucoseIndex: 110,
    type: RationType.drinks
  },
  {
    name: 'destilados',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'horchata',
    gramsToCarbohydrate: 75,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'horchata light',
    gramsToCarbohydrate: 300,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'licor de melocotón o manzana',
    gramsToCarbohydrate: 30,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'mosto',
    gramsToCarbohydrate: 70,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'sangría',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'sidra',
    gramsToCarbohydrate: 200,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'tónica',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 70,
    type: RationType.drinks
  },
  {
    name: 'vermut',
    gramsToCarbohydrate: 75,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'vino blanco o tinto',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'vino dulce',
    gramsToCarbohydrate: 75,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'zumo de fruta comercial',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 60,
    type: RationType.drinks
  },
  {
    name: 'zumo de fruta natural o sin azúcar añadido',
    gramsToCarbohydrate: 250,
    bloodGlucoseIndex: undefined,
    type: RationType.drinks
  },
  {
    name: 'azúcar blanco',
    gramsToCarbohydrate: 10,
    bloodGlucoseIndex: 70,
    type: RationType.others
  },
  {
    name: 'azúcar de moreno',
    gramsToCarbohydrate: 10,
    bloodGlucoseIndex: 70,
    type: RationType.others
  },
  {
    name: 'barrita energética de cereales',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 70,
    type: RationType.others
  },
  {
    name: 'bizcocho o melindro',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 65,
    type: RationType.others
  },
  {
    name: 'bollería en general',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 70,
    type: RationType.others
  },
  {
    name: 'croasán',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 70,
    type: RationType.others
  },
  {
    name: 'cacao en polvo',
    gramsToCarbohydrate: 12,
    bloodGlucoseIndex: 25,
    type: RationType.others
  },
  {
    name: 'cacao en polvo sin azúcar',
    gramsToCarbohydrate: 22,
    bloodGlucoseIndex: 20,
    type: RationType.others
  },
  {
    name: 'calamares a la romana',
    gramsToCarbohydrate: 120,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'canelones con bechamel',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'caramelos',
    gramsToCarbohydrate: 12,
    bloodGlucoseIndex: 70,
    type: RationType.others
  },
  {
    name: 'chocolate blanco o con leche',
    gramsToCarbohydrate: 17,
    bloodGlucoseIndex: 70,
    type: RationType.others
  },
  {
    name: 'chocolate negro',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: 20,
    type: RationType.others
  },
  {
    name: 'churros',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'crema de cacao',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: 55,
    type: RationType.others
  },
  {
    name: 'crema de cacahuete',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: 40,
    type: RationType.others
  },
  {
    name: 'crema pastelera',
    gramsToCarbohydrate: 40,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'croquetas',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'donut',
    gramsToCarbohydrate: 23,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'empanadilla de carne',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'ensaimada',
    gramsToCarbohydrate: 23,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'fructosa(edulcorante)',
    gramsToCarbohydrate: 10,
    bloodGlucoseIndex: 20,
    type: RationType.others
  },
  {
    name: 'gazpacho comercial',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'gelatina comercial',
    gramsToCarbohydrate: 62,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'glocosa (líquida o en pastillas)',
    gramsToCarbohydrate: 10,
    bloodGlucoseIndex: 100,
    type: RationType.others
  },
  {
    name: 'golosinas',
    gramsToCarbohydrate: 18,
    bloodGlucoseIndex: 70,
    type: RationType.others
  },
  {
    name: 'ketchup',
    gramsToCarbohydrate: 50,
    bloodGlucoseIndex: 55,
    type: RationType.others
  },
  {
    name: 'lasaña',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'levadura',
    gramsToCarbohydrate: 130,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'magdalena',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'mazapán',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'merengue',
    gramsToCarbohydrate: 11,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'mermelada',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 65,
    type: RationType.others
  },
  {
    name: 'mermelada light',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: 30,
    type: RationType.others
  },
  {
    name: 'miel',
    gramsToCarbohydrate: 13,
    bloodGlucoseIndex: 85,
    type: RationType.others
  },
  {
    name: 'mostaza',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'palomitas',
    gramsToCarbohydrate: 20,
    bloodGlucoseIndex: 85,
    type: RationType.others
  },
  {
    name: 'pastes de chocolate',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'pastel de crema',
    gramsToCarbohydrate: 35,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'pepinillos en vinagre',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'pizza',
    gramsToCarbohydrate: 40,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'regaliz',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'salsa barbacoa',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'salsa bechamel',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'salsa boloñesa',
    gramsToCarbohydrate: 150,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'salsa carbonara',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'salsa de tomate comercial',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'salsa de soja',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'sucedaneo de café tipo EKO',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'surimi (palitos de cangrejo)',
    gramsToCarbohydrate: 100,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'tarta de manzana',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'tofú',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'tortilla de patatas',
    gramsToCarbohydrate: 120,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'turrón tipo Alicante',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'turrón tipo Jijona',
    gramsToCarbohydrate: 25,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'vinagre',
    gramsToCarbohydrate: 0,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  },
  {
    name: 'vinagre tipo Módena',
    gramsToCarbohydrate: 15,
    bloodGlucoseIndex: undefined,
    type: RationType.others
  }
];
