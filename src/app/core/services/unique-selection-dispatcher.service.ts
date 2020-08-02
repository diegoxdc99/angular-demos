import { Injectable, OnDestroy } from '@angular/core';
export type UniqueSelectionDispatcherListener = (id: number) => void;
@Injectable({
  providedIn: 'root'
})
export class UniqueSelectionDispatcherService implements OnDestroy{

  private _listeners: UniqueSelectionDispatcherListener[] = [];

  notify(id: number) {
    for (const listener of this._listeners) {
      listener(id);
    }
  }

  listen(listener: UniqueSelectionDispatcherListener): () => void {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered: UniqueSelectionDispatcherListener) => {
        return listener !== registered;
      });
    };
  }

  ngOnDestroy() {
    this._listeners = [];
  }
}
