import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'db-server-status',
  standalone: true,
  templateUrl: './serverstatus.component.html',
  styleUrls: ['./serverstatus.component.css'],
})
// export class ServerStatusComponent implements OnInit, OnDestroy {
export class ServerStatusComponent implements OnInit {
  // private timerInterval = signal<NodeJS.Timeout | undefined>(undefined); //have to update tsconfig.json to use NodeJS types
  // private timerInterval = signal<Returntype<typeof setInterval> | undefined>(undefined) // valid as well

  randomStatus = signal<'online' | 'offline' | 'unknown'>('online');

  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log("effect::", this.randomStatus());
    });
  }

  ngOnInit() {
    // this.timerInterval.set(
    //   setInterval(() => {
    //     const rnd = Math.random();
    //     if (rnd < 0.33) {
    //       this.randomStatus.set('online');
    //     } else if (rnd < 0.66) {
    //       this.randomStatus.set('offline');
    //     } else {
    //       this.randomStatus.set('unknown');
    //     }
    //     // console.log("ServerStatusComponent timer tick.", this.randomStatus());
    //   }, 5000)
    // );
    const timerInterval = setInterval(() => {
        const rnd = Math.random();
        if (rnd < 0.33) {
          this.randomStatus.set('online');
        } else if (rnd < 0.66) {
          this.randomStatus.set('offline');
        } else {
          this.randomStatus.set('unknown');
        }
        // console.log("ServerStatusComponent timer tick.", this.randomStatus());
      }, 5000);

    this.destroyRef.onDestroy(() => {
      console.log('ServerStatusComponent destroy scheduled.');
      clearInterval(timerInterval);
    });

  }

  // ngOnDestroy() {
  //   console.log('ServerStatusComponent destroy scheduled.');
  //   clearInterval(this.timerInterval());
  // }


}
