// form-animations.directive.ts
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormAnimations]',
  standalone: true
})
export class FormAnimationsDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const form: HTMLFormElement | null = this.el.nativeElement.querySelector('#contactForm');
    const formGroups: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.form-group');

    // Floating label functionality
    formGroups.forEach(group => {
      const input = group.querySelector('input, textarea') as HTMLInputElement | HTMLTextAreaElement;
      const label = group.querySelector('label');

      if (!input || !label) return;

      this.renderer.listen(input, 'focus', () => {
        group.classList.add('focused');
      });

      this.renderer.listen(input, 'blur', () => {
        if (!input.value) {
          group.classList.remove('focused');
        }
      });

      this.renderer.listen(input, 'input', () => {
        if (input.value) {
          group.classList.add('has-value');
        } else {
          group.classList.remove('has-value');
        }
      });
    });

    // Form submission animation
    if (form) {
      this.renderer.listen(form, 'submit', (e: Event) => {
        e.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
        const originalText = submitButton.innerHTML;

        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        // Simulate async form submission
        setTimeout(() => {
          submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          submitButton.style.background = '#10b981';

          setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
            form.reset();

            // Reset form group states
            formGroups.forEach(group => {
              group.classList.remove('focused', 'has-value');
            });
          }, 2000);
        }, 2000);
      });
    }
  }
}
