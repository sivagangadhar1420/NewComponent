import{Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name:'jPipe',
    pure:false
})
export class ImPure implements PipeTransform{
    transform(val:any):string{
        return val.join(',')
    }
}