import { TestBed, async, inject } from '@angular/core/testing';

import { ProductCreateGuard } from './product-create.guard';

describe('ProductCreateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCreateGuard]
    });
  });

  it('should ...', inject([ProductCreateGuard], (guard: ProductCreateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
