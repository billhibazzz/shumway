/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil; tab-width: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
 * Copyright 2013 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var load = function (scriptPath) {
  importScripts([scriptPath]);
}
if (typeof console === 'undefined') {
  this.console = {};
}
if (console.time) {
  console.time = console.timeEnd = function () {};
}

/* Autogenerated parser references: base=../../ */
console.time("Load Parser Dependencies");

load("../../build/ts/swf/jpeg.js");

load("../../build/ts/utilities.js");
load("../../build/ts/dataBuffer.js");
load("../../build/ts/ShapeData.js");

load("../../build/ts/tools/profiler/timelineFrame.js");
load("../../build/ts/tools/profiler/timelineBuffer.js");

// Load SWF Dependencies
console.time("Load SWF Dependencies");
load("../../build/ts/swf/module.js");
load("../../build/ts/swf/inflate.js");
load("../../build/ts/swf/stream.js");
load("../../build/ts/swf/parser/bitmap.js");
load("../../build/ts/swf/parser/button.js");
load("../../build/ts/swf/parser/font.js");
load("../../build/ts/swf/parser/image.js");
load("../../build/ts/swf/parser/label.js");
load("../../build/ts/swf/parser/shape.js");
load("../../build/ts/swf/parser/sound.js");
load("../../build/ts/swf/parser/text.js");
console.timeEnd("Load SWF Dependencies");

console.time("Load SWF Parser");
load("../../build/ts/SWFTags.js");
load("../../build/ts/swf/parser/templates.js");
load("../../build/ts/swf/parser/handlers.js");
load("../../build/ts/swf/parser/parser.js");
console.timeEnd("Load SWF Parser");

load("../../build/ts/swf/resourceLoader.js");
load("../../build/ts/swf/binaryFileReader.js");

console.timeEnd("Load Parser Dependencies");

/* Autogenerated parser references end */

var loader = new Shumway.SWF.ResourceLoader(this, true);
