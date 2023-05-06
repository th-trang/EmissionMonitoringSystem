import { Component } from '@angular/core';
import { dashboardInfo } from './dashboardInfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  dashboardData : dashboardInfo[] = [{
    Tag: '1HNE10CQ207',
    Name: 'Flue gas H2O',
    SetPoint: '0 ... 33',
    RealtimeValue: '',
    Unit: 'vol-%(wet)',
    DesignP: 'at stack'
  },
  {
    Tag: '1HNE10CQ205',
    Name: 'Flue gas HCl',
    SetPoint: '0 ... 200',
    RealtimeValue: '',
    Unit: 'mg/Nm3(dry) 12 vol-% O2',
    DesignP: 'at stack'
  },
  {
    Tag: '1HNE10CQ204',
    Name: 'Flue gas SO2',
    SetPoint: '0 ... 500',
    RealtimeValue: '',
    Unit: 'mg/Nm3(dry) 12 vol-% O2',
    DesignP: 'at stack'
  },
  {
    Tag: '1HNE10CQ203',
    Name: 'Flue gas NOx',
    SetPoint: '0 ... 800',
    RealtimeValue: '',
    Unit: 'mg/Nm3(dry) 12 vol-% O2',
    DesignP: 'at stack'
  },
  {
    Tag: '1HNE10CQ202',
    Name: 'Flue gas CO',
    SetPoint: '0 ... 700',
    RealtimeValue: '',
    Unit: 'mg/Nm3(dry) 12 vol-% O2',
    DesignP: 'at stack'
  },
  {
    Tag: '1HNE10CQ201',
    Name: 'Flue gas HO2',
    SetPoint: '0 ... 21',
    RealtimeValue: '',
    Unit: 'vol-% O2',
    DesignP: 'at stack'
  },
  {
    Tag: '1HNE10CQ206',
    Name: 'Flue gas dust',
    SetPoint: '0 ... 300',
    RealtimeValue: '',
    Unit: 'mg/Nm3(dry) 12 vol-% O2',
    DesignP: 'at stack'
  },
  {
    Tag: '1HNE10CF201',
    Name: 'Flue gas flow',
    SetPoint: '0 ... 27',
    RealtimeValue: '',
    Unit: 'Nm3/s(wet)',
    DesignP: 'at stack'
  },
  {
    Tag: '1HNE10CP201',
    Name: 'Flue gas pressure',
    SetPoint: '-500 ... 1000',
    RealtimeValue: '',
    Unit: 'Pa(g)',
    DesignP: 'at stack'
  },
  {
    Tag: '1HNE10CT201',
    Name: 'Flue gas temp.',
    SetPoint: '0 ... 200',
    RealtimeValue: '',
    Unit: 'oC',
    DesignP: 'at stack'
  }]
  displayedColumns: string[] = ['Tag', 'Name', 'SetPoint', 'RealtimeValue','Unit','DesignP'];
}
