

## [0.4.0](https://github.com/twekz/dpe-labels/compare/0.3.0...0.4.0) (2024-10-16)


### Features

* **css:** expose CSS variables for customization ([a2ba593](https://github.com/twekz/dpe-labels/commit/a2ba5939c99c20547293dc2f28e23d6f8ca3fa48))


### Bug Fixes

* **css:** rename css variables with cleaner names ([246c433](https://github.com/twekz/dpe-labels/commit/246c433098ea6475c6bdd8f0017a94225cce2a94))
* **style:** adjust columns width ratio ([459d1cd](https://github.com/twekz/dpe-labels/commit/459d1cd68ec0b9f672a01364052c6be4b5919c01))
* **style:** prevent CEP value title overflow ([d42e5bc](https://github.com/twekz/dpe-labels/commit/d42e5bc505e26622e34b27180c90b87fa8578a11))

## [0.3.0](https://github.com/twekz/dpe-labels/compare/0.2.1...0.3.0) (2024-09-12)


### ⚠ BREAKING CHANGES

* **dist:** dpe-labels.umd.cjs is no longer part of the releases

### Bug Fixes

* **build:** fix css filename ([149637f](https://github.com/twekz/dpe-labels/commit/149637f548b4fe81da6bd00ab2f3a41660af64f9))


### Build System

* **dist:** change built files ([0b48d64](https://github.com/twekz/dpe-labels/commit/0b48d64af19e9750f91609a2a1db4555145f7538))

## [0.2.1](https://github.com/twekz/dpe-labels/compare/0.2.0...0.2.1) (2024-09-03)


### Bug Fixes

* enforce regulated minimum size ([aa5a70f](https://github.com/twekz/dpe-labels/commit/aa5a70fefb8ecad4f44eb1714b9b2eb1b290f422))
* **logic:** always display user-submitted CEP grade ([8ee70b7](https://github.com/twekz/dpe-labels/commit/8ee70b7663ad9c20e4bfd459745b76749a71fe27))
* **style:** allow positioned line breaks in legend ([9b2c804](https://github.com/twekz/dpe-labels/commit/9b2c804a968c83968842790def1a0b96955385c1))
* **style:** fix missing color on EGES legend rows ([6b00f67](https://github.com/twekz/dpe-labels/commit/6b00f675f98cb3380edead9b635f13186f61b6b9))
* **style:** fix position bug in Safari ([ba7d156](https://github.com/twekz/dpe-labels/commit/ba7d156924bfe9f628facbcc6c05260e0ed0ce42))
* **style:** improve layout ([e42e580](https://github.com/twekz/dpe-labels/commit/e42e5808e4ed554758e9bed6c810ac944dbd18ed))

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
