
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`should have as title 'villa-retiro-map'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toEqual('villa-retiro-map');
  });

  it('should explain that real geographic data is pending', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;

    expect(text).toContain('Preparando el mapa geográfico');
    expect(text).toContain('Inspeccionar el archivo DWF');
    expect(text).toContain('no se muestran límites ni ubicaciones inventadas');
  });
});
