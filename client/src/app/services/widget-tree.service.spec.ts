import { TestBed } from '@angular/core/testing';

import { WidgetTreeService } from './widget-tree.service';

describe('WidgetTreeService', () => {
  let service: WidgetTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
