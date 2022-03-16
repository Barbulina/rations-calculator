import { TestBed } from '@angular/core/testing';
import { RATIONS_INFO_LIST } from '../data/ration-info-list';
import { CONFIG } from '../shared/config';
import { ListService } from './list.service';

describe('ListService', () => {
  let service: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save list', () => {
    const list = RATIONS_INFO_LIST.slice(0, 1);
    service.save(list);
    expect(localStorage.getItem(CONFIG.localStrorageKey)).toBe(JSON.stringify(list));
  });

  describe('restore', () => {
    it('Should restore ration list from localstorage', () => {
      const listToSave = RATIONS_INFO_LIST.slice(0, 1);
      localStorage.setItem(CONFIG.localStrorageKey, JSON.stringify(listToSave));
      const list = service.restore();
      expect(list).toEqual(listToSave);
    });

    it('Should return empty array if !list', () => {
      localStorage.setItem(CONFIG.localStrorageKey, '');
      expect(service.restore()).toEqual([]);
    });
  });
});
