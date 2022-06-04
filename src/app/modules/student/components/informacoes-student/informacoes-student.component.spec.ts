import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesStudentComponent } from './informacoes-student.component';

describe('InformacoesStudentComponent', () => {
  let component: InformacoesStudentComponent;
  let fixture: ComponentFixture<InformacoesStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacoesStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacoesStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
