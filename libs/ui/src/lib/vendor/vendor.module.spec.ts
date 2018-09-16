import { VendorModule } from './vendor.module';

describe('VendorModule', () => {
  let vendorModule: VendorModule;

  beforeEach(() => {
    vendorModule = new VendorModule();
  });

  it('should create an instance', () => {
    expect(vendorModule).toBeTruthy();
  });
});
