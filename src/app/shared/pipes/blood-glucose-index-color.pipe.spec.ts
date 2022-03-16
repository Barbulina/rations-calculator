import { BloodGlucoseIndexColorPipe } from './blood-glucose-index-color.pipe';

describe('BloodGlucoseIndexColorPipe', () => {
  it('create an instance', () => {
    const pipe = new BloodGlucoseIndexColorPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return green if value is undefined', () => {
      const pipe = new BloodGlucoseIndexColorPipe();
      expect(pipe.transform(undefined)).toBe('green');
    });
    it('should return red', () => {
      const pipe = new BloodGlucoseIndexColorPipe();
      expect(pipe.transform(71)).toBe('red');
    });
    it('should return orange', () => {
      const pipe = new BloodGlucoseIndexColorPipe();
      expect(pipe.transform(59)).toBe('orange');
    });
    it('should return green', () => {
      const pipe = new BloodGlucoseIndexColorPipe();
      expect(pipe.transform(10)).toBe('green');
    });
  });
});
