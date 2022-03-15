import { TestBed } from '@angular/core/testing';
import { RATIONS_INFO_LIST } from '../data/ration-info-list';

import { ListService } from './list.service';

fdescribe('ListService', () => {
  let service: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save list', () => {
    service.save(RATIONS_INFO_LIST);
    expect(localStorage.getItem('ration-list')).toBe(JSON.stringify(RATIONS_INFO_LIST));
  });
});
