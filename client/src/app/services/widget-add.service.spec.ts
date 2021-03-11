import { TestBed } from '@angular/core/testing';

import { WidgetAddService } from './widget-add.service';

describe('WidgetAddService', () => {
  let service: WidgetAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
