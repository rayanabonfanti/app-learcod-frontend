import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesTeacherComponent } from './informacoes-teacher.component';

describe('InformacoesTeacherComponent', () => {
  let component: InformacoesTeacherComponent;
  let fixture: ComponentFixture<InformacoesTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacoesTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacoesTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
