import { TestBed } from '@angular/core/testing';

import { Back4AppService } from './back4-app.service';

describe('Back4AppService', () => {
    let service: Back4AppService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Back4AppService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
