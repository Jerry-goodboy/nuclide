'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */


// This type is duplicated in nuclide-flow-base/lib/FlowService.js
// When updating update both locations!
export type TokenKind = 'keyword'
  | 'class-name'
  | 'constructor'
  | 'method'
  | 'param'
  | 'string'
  | 'whitespace'
  | 'plain'
  | 'type'
  ;

// This type is duplicated in nuclide-flow-base/lib/FlowService.js
// When updating update both locations!
export type TextToken = {
  kind: TokenKind,
  value: string,
};

// This type is duplicated in nuclide-flow-base/lib/FlowService.js
// When updating update both locations!
export type TokenizedText = Array<TextToken>;

export function keyword(value: string): TextToken {
  return _buildToken('keyword', value);
}

export function className(value: string): TextToken {
  return _buildToken('class-name', value);
}

export function constructor(value: string): TextToken {
  return _buildToken('constructor', value);
}

export function method(value: string): TextToken {
  return _buildToken('method', value);
}

export function param(value: string): TextToken {
  return _buildToken('param', value);
}

export function string(value: string): TextToken {
  return _buildToken('string', value);
}

export function whitespace(value: string): TextToken {
  return _buildToken('whitespace', value);
}

export function plain(value: string): TextToken {
  return _buildToken('plain', value);
}

export function type(value: string): TextToken {
  return _buildToken('type', value);
}


function _buildToken(kind: TokenKind, value: string): TextToken {
  return {kind, value};
}
