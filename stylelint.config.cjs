/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    'indentation': null, /* インデントの整形は Prettier に委譲 */
    'string-quotes': null, /* クォートの種類は Prettier に委譲 */
    'no-duplicate-selectors': true, /* 同じセレクタの重複定義を禁止 */
    'no-descending-specificity': null, /* セレクタ詳細度の衝突無効化 */
    'declaration-block-no-duplicate-properties': true, /* 同一ブロック内でのプロパティ重複を禁止 */
    'property-no-unknown': true, /* 未知・タイプミスの CSS プロパティをエラーに */
    'value-no-vendor-prefix': null, /* ベンダープレフィックスは PostCSS 等に委譲 */
    'color-named': null, /* 色指定の制限 */
    'number-leading-zero': null /* 数値表記制限 */  }
};
