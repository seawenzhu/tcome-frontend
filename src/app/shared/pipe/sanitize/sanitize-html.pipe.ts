import {Pipe, PipeTransform} from '@angular/core'
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'

@Pipe({
    name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {
    constructor (private domSanitizer:DomSanitizer){}

    transform (value: any, args?: any): SafeHtml{
        return this.domSanitizer.bypassSecurityTrustHtml(value)
    }

}
