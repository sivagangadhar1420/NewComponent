import {Directive, ElementRef , HostListener , Renderer, Input, OnInit} from '@angular/core';
    @Directive({
        selector:'[showalert]'
    })


export class ShowAlert implements OnInit{
    @Input() color:string;
    constructor(private el:ElementRef, private rendered:Renderer){
            el.nativeElement.style.color=this.color;
            el.nativeElement.style.backgroundColor="green";
            el.nativeElement.style.cursor="pointer";


            // Using Element Ref

    //     rendered.listen(el.nativeElement, "mouseover", ()=>{
    //         el.nativeElement.style.color="red";
    //         el.nativeElement.style.fontSize="5rem";
            
    //     })

    //     rendered.listen(el.nativeElement, "mouseout", ()=>{
    //         el.nativeElement.style.color="blue";
    //         el.nativeElement.style.fontSize="8rem";
            
    //     })
    //     rendered.listen(el.nativeElement, "click", ()=>{
    //         alert(el.nativeElement.innerText);

    //         // alert("clicked");

    //     })

                }
                                // Using HostListener
    
                    @HostListener("click")
                    onClick()
                    {
                        this.el.nativeElement.style.color=this.color;
                        alert(this.el.nativeElement.innerText);
                        

                    }
                        @HostListener('mouseover')
                        onMouseover(){
                        //     this.el.nativeElement.style.color="red";
                        
                        this.el.nativeElement.style.color="yellowgreen";
                        
                            this.el.nativeElement.style.fontSize="1rem";
                           
                        }
                        @HostListener('mouseout')
                        onMouseout(){
                            this.el.nativeElement.style.color="blue";
                        
                            this.el.nativeElement.style.fontSize="5rem";
                           
                        }
                        ngOnInit():any{
                            this.el.nativeElement.style.color=this.color;

                        }
                }

