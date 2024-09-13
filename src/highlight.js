import { styleTags, tags as t } from '@lezer/highlight'

export const highlighting = styleTags({
  'Def/Ident': t.definition(t.variableName),
  '<-': t.controlKeyword,
  Ident: t.variableName,
  Class: t.regexp,
  Literal: t.string,
  Comment: t.lineComment,
  '( )': t.paren,
  '|': t.separator,
  '[ ]': t.squareBracket,
  '{ }': t.brace
})
