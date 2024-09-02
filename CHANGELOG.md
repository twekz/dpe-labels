

## [0.2.0](https://github.com/twekz/dpe-labels/compare/0.1.0...0.2.0) (2024-09-02)


### ⚠ BREAKING CHANGES

* Existing data-* attributes have been renamed as followed:
- ~~`data-cep`~~ → `data-dpe-cep`
- ~~`data-eges`~~ → `data-dpe-eges`
- ~~`data-surface`~~ → `data-dpe-surface`
- ~~`data-altitude`~~ →`data-dpe-altitude`

### Features

* add namespace to all data-* attributes ([2a6e3c3](https://github.com/twekz/dpe-labels/commit/2a6e3c3f61f426a5c5443fc7f4821b280eee6949))
* add new init function ([b488789](https://github.com/twekz/dpe-labels/commit/b4887898170062d9755d3caa9aa89999541e0504))
* support altitude & surface ([9562c74](https://github.com/twekz/dpe-labels/commit/9562c74362e23b4529d2e2528a46bef6fe27b5ef))


### Bug Fixes

* **dom:** prevent multiple SVG sprite injections ([ec95790](https://github.com/twekz/dpe-labels/commit/ec957905ae8b9660146ec64cb67f49eb76c5fdc6))
* **style:** force text-align ([bc42a5c](https://github.com/twekz/dpe-labels/commit/bc42a5c86a04b9e5f82fb4a64aad11c7b8b86e98))
* **style:** prevent line break in graph legends ([47c8cb3](https://github.com/twekz/dpe-labels/commit/47c8cb388db5c08356ba108ebf61022826399443))

## 0.1.0 (2024-08-14)


### Features

* **logic:** add getValuesRangeFromGrade method ([9b8b192](https://github.com/twekz/dpe-labels/commit/9b8b192e3a9d9992758ac064a9d70cb0744628e9))


### Bug Fixes

* **chart:** add "passoire énergétique" legend to CEP chart ([49c17e8](https://github.com/twekz/dpe-labels/commit/49c17e8ec288c0f0f40250eddeb4b2d307261a75))
* **render:** remove extra SVG sprite render ([0650e62](https://github.com/twekz/dpe-labels/commit/0650e62be13d285f1874f7dfd499ab007daeab88))
* **style:** add missing text border to active bars ([63f4e3e](https://github.com/twekz/dpe-labels/commit/63f4e3e087b6211ef84f110caba591ac20acc839))
* **style:** adjust EGES bar sizing & value display ([9ad9f9a](https://github.com/twekz/dpe-labels/commit/9ad9f9ab93947389dc50ab8174b1656b2b552c7a))
* **style:** adjust legend size & spacing ([cc48fac](https://github.com/twekz/dpe-labels/commit/cc48fac37b1c62e0187baf7d17444655d7bda497))
