import { TestBed } from '@angular/core/testing';

import { SppenarInterceptor } from './sppenar.interceptor';

describe('SppenarInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SppenarInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SppenarInterceptor = TestBed.inject(SppenarInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
