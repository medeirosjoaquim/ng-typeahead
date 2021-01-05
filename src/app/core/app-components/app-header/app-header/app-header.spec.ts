import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { State } from 'src/app/store/state/state';
import { AppHeaderComponent } from './app-header.component';
import { CommonModule } from '@angular/common';
import { AppSearchInputModule } from '../../app-search-input/app-search-input.module';
import { TranslateStore, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers/reducers';
describe('AppHeaderComponent', () => {
    let component: AppHeaderComponent;
    let fixture: ComponentFixture<AppHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppHeaderComponent],
            imports: [
                CommonModule,
                AppSearchInputModule,
                SharedModule,
                StoreModule.forRoot(reducers),
                TranslateModule.forChild()
            ],
            providers: [TranslateStore, Store],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create app-header component', () => {
        expect(component).toBeTruthy();
    });
    it('should create 3 flags for language selection', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#list-languages').childElementCount)
        .toEqual(3);
    });
    it('first flag should be for portuguese language', () => {
        const compiled = fixture.debugElement.nativeElement.querySelector('#list-languages');
        expect(compiled.children[0].firstChild.alt).toEqual('idioma portugues');
    });
    it('second flag should be for spanish language', () => {
        const compiled = fixture.debugElement.nativeElement.querySelector('#list-languages');
        expect(compiled.children[1].firstChild.alt).toEqual('idioma espanhol');
    });
    it('third flag should be for english language', () => {
        const compiled = fixture.debugElement.nativeElement.querySelector('#list-languages');
        expect(compiled.children[2].firstChild.alt).toEqual('idioma ingles');
    });
});
