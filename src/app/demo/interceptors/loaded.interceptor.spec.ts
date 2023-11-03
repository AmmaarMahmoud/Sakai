import { TestBed } from '@angular/core/testing';

import { LoadedInterceptor } from './loaded.interceptor';

describe('LoadedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadedInterceptor = TestBed.inject(LoadedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
