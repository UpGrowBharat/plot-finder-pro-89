// Unit conversion utilities for property measurements

export interface ConvertedMeasurement {
  original: {
    value: number;
    unit: string;
    display: string;
  };
  converted: {
    value: number;
    unit: string;
    display: string;
  };
}

export const convertGajToSqM = (gaj: number): number => {
  return gaj * 0.836127;
};

export const convertSqFtToSqM = (sqft: number): number => {
  return sqft * 0.092903;
};

export const convertFeetToMeters = (feet: number): number => {
  return feet * 0.3048;
};

export const convertAcreToSqM = (acre: number): number => {
  return acre * 4046.86;
};

export const getConvertedMeasurement = (size: string, unit: string): ConvertedMeasurement => {
  const numericSize = parseFloat(size);
  
  switch (unit.toLowerCase()) {
    case 'gaj':
      return {
        original: {
          value: numericSize,
          unit: 'Gaj',
          display: `${numericSize} Gaj`
        },
        converted: {
          value: convertGajToSqM(numericSize),
          unit: 'Sq.M',
          display: `${convertGajToSqM(numericSize).toFixed(1)} Sq.M`
        }
      };
    
    case 'sqft':
    case 'sq.ft':
    case 'square feet':
      return {
        original: {
          value: numericSize,
          unit: 'Sq.Ft',
          display: `${numericSize} Sq.Ft`
        },
        converted: {
          value: convertSqFtToSqM(numericSize),
          unit: 'Sq.M',
          display: `${convertSqFtToSqM(numericSize).toFixed(1)} Sq.M`
        }
      };
    
    case 'feet':
    case 'ft':
      return {
        original: {
          value: numericSize,
          unit: 'Feet',
          display: `${numericSize} Feet`
        },
        converted: {
          value: convertFeetToMeters(numericSize),
          unit: 'Meters',
          display: `${convertFeetToMeters(numericSize).toFixed(1)} Meters`
        }
      };
    
    case 'acre':
      return {
        original: {
          value: numericSize,
          unit: 'Acre',
          display: `${numericSize} Acre`
        },
        converted: {
          value: convertAcreToSqM(numericSize),
          unit: 'Sq.M',
          display: `${convertAcreToSqM(numericSize).toFixed(1)} Sq.M`
        }
      };
    
    case 'sqmeter':
    case 'sq.m':
    case 'square meter':
      return {
        original: {
          value: numericSize,
          unit: 'Sq.M',
          display: `${numericSize} Sq.M`
        },
        converted: {
          value: numericSize / 0.836127,
          unit: 'Gaj',
          display: `${(numericSize / 0.836127).toFixed(1)} Gaj`
        }
      };
    
    default:
      return {
        original: {
          value: numericSize,
          unit: unit,
          display: `${numericSize} ${unit}`
        },
        converted: {
          value: numericSize,
          unit: unit,
          display: `${numericSize} ${unit}`
        }
      };
  }
};