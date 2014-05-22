/**
 * Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: IMEEvent
module Shumway.AVM2.AS.flash.events {
  import notImplemented = Shumway.Debug.notImplemented;
  export class IMEEvent extends flash.events.TextEvent {

    static classInitializer: any = null;
    static initializer: any = null;

    static classSymbols: string [] = null;
    static instanceSymbols: string [] = null;

    constructor(type: string, bubbles: boolean = false, cancelable: boolean = false,
                text: string = "", imeClient: flash.text.ime.IIMEClient = null)
    {
      super(undefined, undefined, undefined, undefined);
      notImplemented("Dummy Constructor: public flash.events.IMEEvent");
    }

    // JS -> AS Bindings
    static IME_COMPOSITION: string = "imeComposition";
    static IME_START_COMPOSITION: string = "imeStartComposition";
  }
}