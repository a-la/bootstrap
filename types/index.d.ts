import 'react'

declare module 'react' {
  interface HTMLAttributes<T> {
    /**
     * Add Bootstrap's `.h1` class to the element.
     */
    h1?: boolean
    /**
     * Add Bootstrap's `.h2` class to the element.
     */
    h2?: boolean
    /**
     * Add Bootstrap's `.h3` class to the element.
     */
    h3?: boolean
    /**
     * Add Bootstrap's `.h4` class to the element.
     */
    h4?: boolean
    /**
     * Add Bootstrap's `.h5` class to the element.
     */
    h5?: boolean
    /**
     * Add Bootstrap's `.h6` class to the element.
     */
    h6?: boolean
    /**
     * Add Bootstrap's `.lead` class to the element.
     */
    lead?: boolean
    /**
     * Add Bootstrap's `.display-1` class to the element.
     */
    'display-1'?: boolean
    /**
     * Add Bootstrap's `.display-2` class to the element.
     */
    'display-2'?: boolean
    /**
     * Add Bootstrap's `.display-3` class to the element.
     */
    'display-3'?: boolean
    /**
     * Add Bootstrap's `.display-4` class to the element.
     */
    'display-4'?: boolean
    /**
     * Add Bootstrap's `.small` class to the element.
     */
    small?: boolean
    /**
     * Add Bootstrap's `.mark` class to the element.
     */
    mark?: boolean
    /**
     * Add Bootstrap's `.list-unstyled` class to the element.
     */
    'list-unstyled'?: boolean
    /**
     * Add Bootstrap's `.list-inline` class to the element.
     */
    'list-inline'?: boolean
    /**
     * Add Bootstrap's `.list-inline-item` class to the element.
     */
    'list-inline-item'?: boolean
    /**
     * Add Bootstrap's `.initialism` class to the element.
     */
    initialism?: boolean
    /**
     * Add Bootstrap's `.blockquote` class to the element.
     */
    blockquote?: boolean
    /**
     * Add Bootstrap's `.blockquote-footer` class to the element.
     */
    'blockquote-footer'?: boolean
    /**
     * Add Bootstrap's `.img-fluid` class to the element.
     */
    'img-fluid'?: boolean
    /**
     * Add Bootstrap's `.img-thumbnail` class to the element.
     */
    'img-thumbnail'?: boolean
    /**
     * Add Bootstrap's `.figure` class to the element.
     */
    figure?: boolean
    /**
     * Add Bootstrap's `.figure-img` class to the element.
     */
    'figure-img'?: boolean
    /**
     * Add Bootstrap's `.figure-caption` class to the element.
     */
    'figure-caption'?: boolean
    /**
     * Add Bootstrap's `.pre-scrollable` class to the element.
     */
    'pre-scrollable'?: boolean
    /**
     * Add Bootstrap's `.container` class to the element.
     */
    container?: boolean
    /**
     * Add Bootstrap's `.container-fluid` class to the element.
     */
    'container-fluid'?: boolean
    /**
     * Add Bootstrap's `.container-sm` class to the element.
     */
    'container-sm'?: boolean
    /**
     * Add Bootstrap's `.container-md` class to the element.
     */
    'container-md'?: boolean
    /**
     * Add Bootstrap's `.container-lg` class to the element.
     */
    'container-lg'?: boolean
    /**
     * Add Bootstrap's `.container-xl` class to the element.
     */
    'container-xl'?: boolean
    /**
     * Add Bootstrap's `.row` class to the element.
     */
    row?: boolean
    /**
     * Add Bootstrap's `.no-gutters` class to the element.
     */
    'no-gutters'?: boolean
    /**
     * Add Bootstrap's `.col` class to the element.
     */
    col?: boolean
    /**
     * Add Bootstrap's `.col-1` class to the element.
     */
    'col-1'?: boolean
    /**
     * Add Bootstrap's `.col-2` class to the element.
     */
    'col-2'?: boolean
    /**
     * Add Bootstrap's `.col-3` class to the element.
     */
    'col-3'?: boolean
    /**
     * Add Bootstrap's `.col-4` class to the element.
     */
    'col-4'?: boolean
    /**
     * Add Bootstrap's `.col-5` class to the element.
     */
    'col-5'?: boolean
    /**
     * Add Bootstrap's `.col-6` class to the element.
     */
    'col-6'?: boolean
    /**
     * Add Bootstrap's `.col-7` class to the element.
     */
    'col-7'?: boolean
    /**
     * Add Bootstrap's `.col-8` class to the element.
     */
    'col-8'?: boolean
    /**
     * Add Bootstrap's `.col-9` class to the element.
     */
    'col-9'?: boolean
    /**
     * Add Bootstrap's `.col-10` class to the element.
     */
    'col-10'?: boolean
    /**
     * Add Bootstrap's `.col-11` class to the element.
     */
    'col-11'?: boolean
    /**
     * Add Bootstrap's `.col-12` class to the element.
     */
    'col-12'?: boolean
    /**
     * Add Bootstrap's `.col-auto` class to the element.
     */
    'col-auto'?: boolean
    /**
     * Add Bootstrap's `.col-sm-1` class to the element.
     */
    'col-sm-1'?: boolean
    /**
     * Add Bootstrap's `.col-sm-2` class to the element.
     */
    'col-sm-2'?: boolean
    /**
     * Add Bootstrap's `.col-sm-3` class to the element.
     */
    'col-sm-3'?: boolean
    /**
     * Add Bootstrap's `.col-sm-4` class to the element.
     */
    'col-sm-4'?: boolean
    /**
     * Add Bootstrap's `.col-sm-5` class to the element.
     */
    'col-sm-5'?: boolean
    /**
     * Add Bootstrap's `.col-sm-6` class to the element.
     */
    'col-sm-6'?: boolean
    /**
     * Add Bootstrap's `.col-sm-7` class to the element.
     */
    'col-sm-7'?: boolean
    /**
     * Add Bootstrap's `.col-sm-8` class to the element.
     */
    'col-sm-8'?: boolean
    /**
     * Add Bootstrap's `.col-sm-9` class to the element.
     */
    'col-sm-9'?: boolean
    /**
     * Add Bootstrap's `.col-sm-10` class to the element.
     */
    'col-sm-10'?: boolean
    /**
     * Add Bootstrap's `.col-sm-11` class to the element.
     */
    'col-sm-11'?: boolean
    /**
     * Add Bootstrap's `.col-sm-12` class to the element.
     */
    'col-sm-12'?: boolean
    /**
     * Add Bootstrap's `.col-sm` class to the element.
     */
    'col-sm'?: boolean
    /**
     * Add Bootstrap's `.col-sm-auto` class to the element.
     */
    'col-sm-auto'?: boolean
    /**
     * Add Bootstrap's `.col-md-1` class to the element.
     */
    'col-md-1'?: boolean
    /**
     * Add Bootstrap's `.col-md-2` class to the element.
     */
    'col-md-2'?: boolean
    /**
     * Add Bootstrap's `.col-md-3` class to the element.
     */
    'col-md-3'?: boolean
    /**
     * Add Bootstrap's `.col-md-4` class to the element.
     */
    'col-md-4'?: boolean
    /**
     * Add Bootstrap's `.col-md-5` class to the element.
     */
    'col-md-5'?: boolean
    /**
     * Add Bootstrap's `.col-md-6` class to the element.
     */
    'col-md-6'?: boolean
    /**
     * Add Bootstrap's `.col-md-7` class to the element.
     */
    'col-md-7'?: boolean
    /**
     * Add Bootstrap's `.col-md-8` class to the element.
     */
    'col-md-8'?: boolean
    /**
     * Add Bootstrap's `.col-md-9` class to the element.
     */
    'col-md-9'?: boolean
    /**
     * Add Bootstrap's `.col-md-10` class to the element.
     */
    'col-md-10'?: boolean
    /**
     * Add Bootstrap's `.col-md-11` class to the element.
     */
    'col-md-11'?: boolean
    /**
     * Add Bootstrap's `.col-md-12` class to the element.
     */
    'col-md-12'?: boolean
    /**
     * Add Bootstrap's `.col-md` class to the element.
     */
    'col-md'?: boolean
    /**
     * Add Bootstrap's `.col-md-auto` class to the element.
     */
    'col-md-auto'?: boolean
    /**
     * Add Bootstrap's `.col-lg-1` class to the element.
     */
    'col-lg-1'?: boolean
    /**
     * Add Bootstrap's `.col-lg-2` class to the element.
     */
    'col-lg-2'?: boolean
    /**
     * Add Bootstrap's `.col-lg-3` class to the element.
     */
    'col-lg-3'?: boolean
    /**
     * Add Bootstrap's `.col-lg-4` class to the element.
     */
    'col-lg-4'?: boolean
    /**
     * Add Bootstrap's `.col-lg-5` class to the element.
     */
    'col-lg-5'?: boolean
    /**
     * Add Bootstrap's `.col-lg-6` class to the element.
     */
    'col-lg-6'?: boolean
    /**
     * Add Bootstrap's `.col-lg-7` class to the element.
     */
    'col-lg-7'?: boolean
    /**
     * Add Bootstrap's `.col-lg-8` class to the element.
     */
    'col-lg-8'?: boolean
    /**
     * Add Bootstrap's `.col-lg-9` class to the element.
     */
    'col-lg-9'?: boolean
    /**
     * Add Bootstrap's `.col-lg-10` class to the element.
     */
    'col-lg-10'?: boolean
    /**
     * Add Bootstrap's `.col-lg-11` class to the element.
     */
    'col-lg-11'?: boolean
    /**
     * Add Bootstrap's `.col-lg-12` class to the element.
     */
    'col-lg-12'?: boolean
    /**
     * Add Bootstrap's `.col-lg` class to the element.
     */
    'col-lg'?: boolean
    /**
     * Add Bootstrap's `.col-lg-auto` class to the element.
     */
    'col-lg-auto'?: boolean
    /**
     * Add Bootstrap's `.col-xl-1` class to the element.
     */
    'col-xl-1'?: boolean
    /**
     * Add Bootstrap's `.col-xl-2` class to the element.
     */
    'col-xl-2'?: boolean
    /**
     * Add Bootstrap's `.col-xl-3` class to the element.
     */
    'col-xl-3'?: boolean
    /**
     * Add Bootstrap's `.col-xl-4` class to the element.
     */
    'col-xl-4'?: boolean
    /**
     * Add Bootstrap's `.col-xl-5` class to the element.
     */
    'col-xl-5'?: boolean
    /**
     * Add Bootstrap's `.col-xl-6` class to the element.
     */
    'col-xl-6'?: boolean
    /**
     * Add Bootstrap's `.col-xl-7` class to the element.
     */
    'col-xl-7'?: boolean
    /**
     * Add Bootstrap's `.col-xl-8` class to the element.
     */
    'col-xl-8'?: boolean
    /**
     * Add Bootstrap's `.col-xl-9` class to the element.
     */
    'col-xl-9'?: boolean
    /**
     * Add Bootstrap's `.col-xl-10` class to the element.
     */
    'col-xl-10'?: boolean
    /**
     * Add Bootstrap's `.col-xl-11` class to the element.
     */
    'col-xl-11'?: boolean
    /**
     * Add Bootstrap's `.col-xl-12` class to the element.
     */
    'col-xl-12'?: boolean
    /**
     * Add Bootstrap's `.col-xl` class to the element.
     */
    'col-xl'?: boolean
    /**
     * Add Bootstrap's `.col-xl-auto` class to the element.
     */
    'col-xl-auto'?: boolean
    /**
     * Add Bootstrap's `.row-cols-1` class to the element.
     */
    'row-cols-1'?: boolean
    /**
     * Add Bootstrap's `.row-cols-2` class to the element.
     */
    'row-cols-2'?: boolean
    /**
     * Add Bootstrap's `.row-cols-3` class to the element.
     */
    'row-cols-3'?: boolean
    /**
     * Add Bootstrap's `.row-cols-4` class to the element.
     */
    'row-cols-4'?: boolean
    /**
     * Add Bootstrap's `.row-cols-5` class to the element.
     */
    'row-cols-5'?: boolean
    /**
     * Add Bootstrap's `.row-cols-6` class to the element.
     */
    'row-cols-6'?: boolean
    /**
     * Add Bootstrap's `.order-first` class to the element.
     */
    'order-first'?: boolean
    /**
     * Add Bootstrap's `.order-last` class to the element.
     */
    'order-last'?: boolean
    /**
     * Add Bootstrap's `.order-0` class to the element.
     */
    'order-0'?: boolean
    /**
     * Add Bootstrap's `.order-1` class to the element.
     */
    'order-1'?: boolean
    /**
     * Add Bootstrap's `.order-2` class to the element.
     */
    'order-2'?: boolean
    /**
     * Add Bootstrap's `.order-3` class to the element.
     */
    'order-3'?: boolean
    /**
     * Add Bootstrap's `.order-4` class to the element.
     */
    'order-4'?: boolean
    /**
     * Add Bootstrap's `.order-5` class to the element.
     */
    'order-5'?: boolean
    /**
     * Add Bootstrap's `.order-6` class to the element.
     */
    'order-6'?: boolean
    /**
     * Add Bootstrap's `.order-7` class to the element.
     */
    'order-7'?: boolean
    /**
     * Add Bootstrap's `.order-8` class to the element.
     */
    'order-8'?: boolean
    /**
     * Add Bootstrap's `.order-9` class to the element.
     */
    'order-9'?: boolean
    /**
     * Add Bootstrap's `.order-10` class to the element.
     */
    'order-10'?: boolean
    /**
     * Add Bootstrap's `.order-11` class to the element.
     */
    'order-11'?: boolean
    /**
     * Add Bootstrap's `.order-12` class to the element.
     */
    'order-12'?: boolean
    /**
     * Add Bootstrap's `.offset-1` class to the element.
     */
    'offset-1'?: boolean
    /**
     * Add Bootstrap's `.offset-2` class to the element.
     */
    'offset-2'?: boolean
    /**
     * Add Bootstrap's `.offset-3` class to the element.
     */
    'offset-3'?: boolean
    /**
     * Add Bootstrap's `.offset-4` class to the element.
     */
    'offset-4'?: boolean
    /**
     * Add Bootstrap's `.offset-5` class to the element.
     */
    'offset-5'?: boolean
    /**
     * Add Bootstrap's `.offset-6` class to the element.
     */
    'offset-6'?: boolean
    /**
     * Add Bootstrap's `.offset-7` class to the element.
     */
    'offset-7'?: boolean
    /**
     * Add Bootstrap's `.offset-8` class to the element.
     */
    'offset-8'?: boolean
    /**
     * Add Bootstrap's `.offset-9` class to the element.
     */
    'offset-9'?: boolean
    /**
     * Add Bootstrap's `.offset-10` class to the element.
     */
    'offset-10'?: boolean
    /**
     * Add Bootstrap's `.offset-11` class to the element.
     */
    'offset-11'?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-1` class to the element.
     */
    'row-cols-sm-1'?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-2` class to the element.
     */
    'row-cols-sm-2'?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-3` class to the element.
     */
    'row-cols-sm-3'?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-4` class to the element.
     */
    'row-cols-sm-4'?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-5` class to the element.
     */
    'row-cols-sm-5'?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-6` class to the element.
     */
    'row-cols-sm-6'?: boolean
    /**
     * Add Bootstrap's `.order-sm-first` class to the element.
     */
    'order-sm-first'?: boolean
    /**
     * Add Bootstrap's `.order-sm-last` class to the element.
     */
    'order-sm-last'?: boolean
    /**
     * Add Bootstrap's `.order-sm-0` class to the element.
     */
    'order-sm-0'?: boolean
    /**
     * Add Bootstrap's `.order-sm-1` class to the element.
     */
    'order-sm-1'?: boolean
    /**
     * Add Bootstrap's `.order-sm-2` class to the element.
     */
    'order-sm-2'?: boolean
    /**
     * Add Bootstrap's `.order-sm-3` class to the element.
     */
    'order-sm-3'?: boolean
    /**
     * Add Bootstrap's `.order-sm-4` class to the element.
     */
    'order-sm-4'?: boolean
    /**
     * Add Bootstrap's `.order-sm-5` class to the element.
     */
    'order-sm-5'?: boolean
    /**
     * Add Bootstrap's `.order-sm-6` class to the element.
     */
    'order-sm-6'?: boolean
    /**
     * Add Bootstrap's `.order-sm-7` class to the element.
     */
    'order-sm-7'?: boolean
    /**
     * Add Bootstrap's `.order-sm-8` class to the element.
     */
    'order-sm-8'?: boolean
    /**
     * Add Bootstrap's `.order-sm-9` class to the element.
     */
    'order-sm-9'?: boolean
    /**
     * Add Bootstrap's `.order-sm-10` class to the element.
     */
    'order-sm-10'?: boolean
    /**
     * Add Bootstrap's `.order-sm-11` class to the element.
     */
    'order-sm-11'?: boolean
    /**
     * Add Bootstrap's `.order-sm-12` class to the element.
     */
    'order-sm-12'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-0` class to the element.
     */
    'offset-sm-0'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-1` class to the element.
     */
    'offset-sm-1'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-2` class to the element.
     */
    'offset-sm-2'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-3` class to the element.
     */
    'offset-sm-3'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-4` class to the element.
     */
    'offset-sm-4'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-5` class to the element.
     */
    'offset-sm-5'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-6` class to the element.
     */
    'offset-sm-6'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-7` class to the element.
     */
    'offset-sm-7'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-8` class to the element.
     */
    'offset-sm-8'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-9` class to the element.
     */
    'offset-sm-9'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-10` class to the element.
     */
    'offset-sm-10'?: boolean
    /**
     * Add Bootstrap's `.offset-sm-11` class to the element.
     */
    'offset-sm-11'?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-1` class to the element.
     */
    'row-cols-md-1'?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-2` class to the element.
     */
    'row-cols-md-2'?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-3` class to the element.
     */
    'row-cols-md-3'?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-4` class to the element.
     */
    'row-cols-md-4'?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-5` class to the element.
     */
    'row-cols-md-5'?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-6` class to the element.
     */
    'row-cols-md-6'?: boolean
    /**
     * Add Bootstrap's `.order-md-first` class to the element.
     */
    'order-md-first'?: boolean
    /**
     * Add Bootstrap's `.order-md-last` class to the element.
     */
    'order-md-last'?: boolean
    /**
     * Add Bootstrap's `.order-md-0` class to the element.
     */
    'order-md-0'?: boolean
    /**
     * Add Bootstrap's `.order-md-1` class to the element.
     */
    'order-md-1'?: boolean
    /**
     * Add Bootstrap's `.order-md-2` class to the element.
     */
    'order-md-2'?: boolean
    /**
     * Add Bootstrap's `.order-md-3` class to the element.
     */
    'order-md-3'?: boolean
    /**
     * Add Bootstrap's `.order-md-4` class to the element.
     */
    'order-md-4'?: boolean
    /**
     * Add Bootstrap's `.order-md-5` class to the element.
     */
    'order-md-5'?: boolean
    /**
     * Add Bootstrap's `.order-md-6` class to the element.
     */
    'order-md-6'?: boolean
    /**
     * Add Bootstrap's `.order-md-7` class to the element.
     */
    'order-md-7'?: boolean
    /**
     * Add Bootstrap's `.order-md-8` class to the element.
     */
    'order-md-8'?: boolean
    /**
     * Add Bootstrap's `.order-md-9` class to the element.
     */
    'order-md-9'?: boolean
    /**
     * Add Bootstrap's `.order-md-10` class to the element.
     */
    'order-md-10'?: boolean
    /**
     * Add Bootstrap's `.order-md-11` class to the element.
     */
    'order-md-11'?: boolean
    /**
     * Add Bootstrap's `.order-md-12` class to the element.
     */
    'order-md-12'?: boolean
    /**
     * Add Bootstrap's `.offset-md-0` class to the element.
     */
    'offset-md-0'?: boolean
    /**
     * Add Bootstrap's `.offset-md-1` class to the element.
     */
    'offset-md-1'?: boolean
    /**
     * Add Bootstrap's `.offset-md-2` class to the element.
     */
    'offset-md-2'?: boolean
    /**
     * Add Bootstrap's `.offset-md-3` class to the element.
     */
    'offset-md-3'?: boolean
    /**
     * Add Bootstrap's `.offset-md-4` class to the element.
     */
    'offset-md-4'?: boolean
    /**
     * Add Bootstrap's `.offset-md-5` class to the element.
     */
    'offset-md-5'?: boolean
    /**
     * Add Bootstrap's `.offset-md-6` class to the element.
     */
    'offset-md-6'?: boolean
    /**
     * Add Bootstrap's `.offset-md-7` class to the element.
     */
    'offset-md-7'?: boolean
    /**
     * Add Bootstrap's `.offset-md-8` class to the element.
     */
    'offset-md-8'?: boolean
    /**
     * Add Bootstrap's `.offset-md-9` class to the element.
     */
    'offset-md-9'?: boolean
    /**
     * Add Bootstrap's `.offset-md-10` class to the element.
     */
    'offset-md-10'?: boolean
    /**
     * Add Bootstrap's `.offset-md-11` class to the element.
     */
    'offset-md-11'?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-1` class to the element.
     */
    'row-cols-lg-1'?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-2` class to the element.
     */
    'row-cols-lg-2'?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-3` class to the element.
     */
    'row-cols-lg-3'?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-4` class to the element.
     */
    'row-cols-lg-4'?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-5` class to the element.
     */
    'row-cols-lg-5'?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-6` class to the element.
     */
    'row-cols-lg-6'?: boolean
    /**
     * Add Bootstrap's `.order-lg-first` class to the element.
     */
    'order-lg-first'?: boolean
    /**
     * Add Bootstrap's `.order-lg-last` class to the element.
     */
    'order-lg-last'?: boolean
    /**
     * Add Bootstrap's `.order-lg-0` class to the element.
     */
    'order-lg-0'?: boolean
    /**
     * Add Bootstrap's `.order-lg-1` class to the element.
     */
    'order-lg-1'?: boolean
    /**
     * Add Bootstrap's `.order-lg-2` class to the element.
     */
    'order-lg-2'?: boolean
    /**
     * Add Bootstrap's `.order-lg-3` class to the element.
     */
    'order-lg-3'?: boolean
    /**
     * Add Bootstrap's `.order-lg-4` class to the element.
     */
    'order-lg-4'?: boolean
    /**
     * Add Bootstrap's `.order-lg-5` class to the element.
     */
    'order-lg-5'?: boolean
    /**
     * Add Bootstrap's `.order-lg-6` class to the element.
     */
    'order-lg-6'?: boolean
    /**
     * Add Bootstrap's `.order-lg-7` class to the element.
     */
    'order-lg-7'?: boolean
    /**
     * Add Bootstrap's `.order-lg-8` class to the element.
     */
    'order-lg-8'?: boolean
    /**
     * Add Bootstrap's `.order-lg-9` class to the element.
     */
    'order-lg-9'?: boolean
    /**
     * Add Bootstrap's `.order-lg-10` class to the element.
     */
    'order-lg-10'?: boolean
    /**
     * Add Bootstrap's `.order-lg-11` class to the element.
     */
    'order-lg-11'?: boolean
    /**
     * Add Bootstrap's `.order-lg-12` class to the element.
     */
    'order-lg-12'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-0` class to the element.
     */
    'offset-lg-0'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-1` class to the element.
     */
    'offset-lg-1'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-2` class to the element.
     */
    'offset-lg-2'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-3` class to the element.
     */
    'offset-lg-3'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-4` class to the element.
     */
    'offset-lg-4'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-5` class to the element.
     */
    'offset-lg-5'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-6` class to the element.
     */
    'offset-lg-6'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-7` class to the element.
     */
    'offset-lg-7'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-8` class to the element.
     */
    'offset-lg-8'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-9` class to the element.
     */
    'offset-lg-9'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-10` class to the element.
     */
    'offset-lg-10'?: boolean
    /**
     * Add Bootstrap's `.offset-lg-11` class to the element.
     */
    'offset-lg-11'?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-1` class to the element.
     */
    'row-cols-xl-1'?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-2` class to the element.
     */
    'row-cols-xl-2'?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-3` class to the element.
     */
    'row-cols-xl-3'?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-4` class to the element.
     */
    'row-cols-xl-4'?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-5` class to the element.
     */
    'row-cols-xl-5'?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-6` class to the element.
     */
    'row-cols-xl-6'?: boolean
    /**
     * Add Bootstrap's `.order-xl-first` class to the element.
     */
    'order-xl-first'?: boolean
    /**
     * Add Bootstrap's `.order-xl-last` class to the element.
     */
    'order-xl-last'?: boolean
    /**
     * Add Bootstrap's `.order-xl-0` class to the element.
     */
    'order-xl-0'?: boolean
    /**
     * Add Bootstrap's `.order-xl-1` class to the element.
     */
    'order-xl-1'?: boolean
    /**
     * Add Bootstrap's `.order-xl-2` class to the element.
     */
    'order-xl-2'?: boolean
    /**
     * Add Bootstrap's `.order-xl-3` class to the element.
     */
    'order-xl-3'?: boolean
    /**
     * Add Bootstrap's `.order-xl-4` class to the element.
     */
    'order-xl-4'?: boolean
    /**
     * Add Bootstrap's `.order-xl-5` class to the element.
     */
    'order-xl-5'?: boolean
    /**
     * Add Bootstrap's `.order-xl-6` class to the element.
     */
    'order-xl-6'?: boolean
    /**
     * Add Bootstrap's `.order-xl-7` class to the element.
     */
    'order-xl-7'?: boolean
    /**
     * Add Bootstrap's `.order-xl-8` class to the element.
     */
    'order-xl-8'?: boolean
    /**
     * Add Bootstrap's `.order-xl-9` class to the element.
     */
    'order-xl-9'?: boolean
    /**
     * Add Bootstrap's `.order-xl-10` class to the element.
     */
    'order-xl-10'?: boolean
    /**
     * Add Bootstrap's `.order-xl-11` class to the element.
     */
    'order-xl-11'?: boolean
    /**
     * Add Bootstrap's `.order-xl-12` class to the element.
     */
    'order-xl-12'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-0` class to the element.
     */
    'offset-xl-0'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-1` class to the element.
     */
    'offset-xl-1'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-2` class to the element.
     */
    'offset-xl-2'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-3` class to the element.
     */
    'offset-xl-3'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-4` class to the element.
     */
    'offset-xl-4'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-5` class to the element.
     */
    'offset-xl-5'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-6` class to the element.
     */
    'offset-xl-6'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-7` class to the element.
     */
    'offset-xl-7'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-8` class to the element.
     */
    'offset-xl-8'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-9` class to the element.
     */
    'offset-xl-9'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-10` class to the element.
     */
    'offset-xl-10'?: boolean
    /**
     * Add Bootstrap's `.offset-xl-11` class to the element.
     */
    'offset-xl-11'?: boolean
    /**
     * Add Bootstrap's `.table` class to the element.
     */
    table?: boolean
    /**
     * Add Bootstrap's `.table-sm` class to the element.
     */
    'table-sm'?: boolean
    /**
     * Add Bootstrap's `.table-bordered` class to the element.
     */
    'table-bordered'?: boolean
    /**
     * Add Bootstrap's `.table-borderless` class to the element.
     */
    'table-borderless'?: boolean
    /**
     * Add Bootstrap's `.table-striped` class to the element.
     */
    'table-striped'?: boolean
    /**
     * Add Bootstrap's `.table-hover` class to the element.
     */
    'table-hover'?: boolean
    /**
     * Add Bootstrap's `.table-primary` class to the element.
     */
    'table-primary'?: boolean
    /**
     * Add Bootstrap's `.table-secondary` class to the element.
     */
    'table-secondary'?: boolean
    /**
     * Add Bootstrap's `.table-success` class to the element.
     */
    'table-success'?: boolean
    /**
     * Add Bootstrap's `.table-info` class to the element.
     */
    'table-info'?: boolean
    /**
     * Add Bootstrap's `.table-warning` class to the element.
     */
    'table-warning'?: boolean
    /**
     * Add Bootstrap's `.table-danger` class to the element.
     */
    'table-danger'?: boolean
    /**
     * Add Bootstrap's `.table-light` class to the element.
     */
    'table-light'?: boolean
    /**
     * Add Bootstrap's `.table-dark` class to the element.
     */
    'table-dark'?: boolean
    /**
     * Add Bootstrap's `.table-active` class to the element.
     */
    'table-active'?: boolean
    /**
     * Add Bootstrap's `.thead-dark` class to the element.
     */
    'thead-dark'?: boolean
    /**
     * Add Bootstrap's `.thead-light` class to the element.
     */
    'thead-light'?: boolean
    /**
     * Add Bootstrap's `.table-responsive-sm` class to the element.
     */
    'table-responsive-sm'?: boolean
    /**
     * Add Bootstrap's `.table-responsive-md` class to the element.
     */
    'table-responsive-md'?: boolean
    /**
     * Add Bootstrap's `.table-responsive-lg` class to the element.
     */
    'table-responsive-lg'?: boolean
    /**
     * Add Bootstrap's `.table-responsive-xl` class to the element.
     */
    'table-responsive-xl'?: boolean
    /**
     * Add Bootstrap's `.table-responsive` class to the element.
     */
    'table-responsive'?: boolean
    /**
     * Add Bootstrap's `.form-control` class to the element.
     */
    'form-control'?: boolean
    /**
     * Add Bootstrap's `.form-control-file` class to the element.
     */
    'form-control-file'?: boolean
    /**
     * Add Bootstrap's `.form-control-range` class to the element.
     */
    'form-control-range'?: boolean
    /**
     * Add Bootstrap's `.col-form-label` class to the element.
     */
    'col-form-label'?: boolean
    /**
     * Add Bootstrap's `.col-form-label-lg` class to the element.
     */
    'col-form-label-lg'?: boolean
    /**
     * Add Bootstrap's `.col-form-label-sm` class to the element.
     */
    'col-form-label-sm'?: boolean
    /**
     * Add Bootstrap's `.form-control-plaintext` class to the element.
     */
    'form-control-plaintext'?: boolean
    /**
     * Add Bootstrap's `.form-control-sm` class to the element.
     */
    'form-control-sm'?: boolean
    /**
     * Add Bootstrap's `.form-control-lg` class to the element.
     */
    'form-control-lg'?: boolean
    /**
     * Add Bootstrap's `.form-group` class to the element.
     */
    'form-group'?: boolean
    /**
     * Add Bootstrap's `.form-text` class to the element.
     */
    'form-text'?: boolean
    /**
     * Add Bootstrap's `.form-row` class to the element.
     */
    'form-row'?: boolean
    /**
     * Add Bootstrap's `.form-check` class to the element.
     */
    'form-check'?: boolean
    /**
     * Add Bootstrap's `.form-check-input` class to the element.
     */
    'form-check-input'?: boolean
    /**
     * Add Bootstrap's `.form-check-label` class to the element.
     */
    'form-check-label'?: boolean
    /**
     * Add Bootstrap's `.form-check-inline` class to the element.
     */
    'form-check-inline'?: boolean
    /**
     * Add Bootstrap's `.valid-feedback` class to the element.
     */
    'valid-feedback'?: boolean
    /**
     * Add Bootstrap's `.valid-tooltip` class to the element.
     */
    'valid-tooltip'?: boolean
    /**
     * Add Bootstrap's `.was-validated` class to the element.
     */
    'was-validated'?: boolean
    /**
     * Add Bootstrap's `.is-valid` class to the element.
     */
    'is-valid'?: boolean
    /**
     * Add Bootstrap's `.custom-select` class to the element.
     */
    'custom-select'?: boolean
    /**
     * Add Bootstrap's `.custom-control-input` class to the element.
     */
    'custom-control-input'?: boolean
    /**
     * Add Bootstrap's `.custom-control-label` class to the element.
     */
    'custom-control-label'?: boolean
    /**
     * Add Bootstrap's `.custom-file-input` class to the element.
     */
    'custom-file-input'?: boolean
    /**
     * Add Bootstrap's `.custom-file-label` class to the element.
     */
    'custom-file-label'?: boolean
    /**
     * Add Bootstrap's `.invalid-feedback` class to the element.
     */
    'invalid-feedback'?: boolean
    /**
     * Add Bootstrap's `.invalid-tooltip` class to the element.
     */
    'invalid-tooltip'?: boolean
    /**
     * Add Bootstrap's `.is-invalid` class to the element.
     */
    'is-invalid'?: boolean
    /**
     * Add Bootstrap's `.form-inline` class to the element.
     */
    'form-inline'?: boolean
    /**
     * Add Bootstrap's `.input-group` class to the element.
     */
    'input-group'?: boolean
    /**
     * Add Bootstrap's `.custom-control` class to the element.
     */
    'custom-control'?: boolean
    /**
     * Add Bootstrap's `.btn` class to the element.
     */
    btn?: boolean
    /**
     * Add Bootstrap's `.focus` class to the element.
     */
    focus?: boolean
    /**
     * Add Bootstrap's `.disabled` class to the element.
     */
    disabled?: boolean
    /**
     * Add Bootstrap's `.btn-primary` class to the element.
     */
    'btn-primary'?: boolean
    /**
     * Add Bootstrap's `.active` class to the element.
     */
    active?: boolean
    /**
     * Add Bootstrap's `.show` class to the element.
     */
    show?: boolean
    /**
     * Add Bootstrap's `.dropdown-toggle` class to the element.
     */
    'dropdown-toggle'?: boolean
    /**
     * Add Bootstrap's `.btn-secondary` class to the element.
     */
    'btn-secondary'?: boolean
    /**
     * Add Bootstrap's `.btn-success` class to the element.
     */
    'btn-success'?: boolean
    /**
     * Add Bootstrap's `.btn-info` class to the element.
     */
    'btn-info'?: boolean
    /**
     * Add Bootstrap's `.btn-warning` class to the element.
     */
    'btn-warning'?: boolean
    /**
     * Add Bootstrap's `.btn-danger` class to the element.
     */
    'btn-danger'?: boolean
    /**
     * Add Bootstrap's `.btn-light` class to the element.
     */
    'btn-light'?: boolean
    /**
     * Add Bootstrap's `.btn-dark` class to the element.
     */
    'btn-dark'?: boolean
    /**
     * Add Bootstrap's `.btn-outline-primary` class to the element.
     */
    'btn-outline-primary'?: boolean
    /**
     * Add Bootstrap's `.btn-outline-secondary` class to the element.
     */
    'btn-outline-secondary'?: boolean
    /**
     * Add Bootstrap's `.btn-outline-success` class to the element.
     */
    'btn-outline-success'?: boolean
    /**
     * Add Bootstrap's `.btn-outline-info` class to the element.
     */
    'btn-outline-info'?: boolean
    /**
     * Add Bootstrap's `.btn-outline-warning` class to the element.
     */
    'btn-outline-warning'?: boolean
    /**
     * Add Bootstrap's `.btn-outline-danger` class to the element.
     */
    'btn-outline-danger'?: boolean
    /**
     * Add Bootstrap's `.btn-outline-light` class to the element.
     */
    'btn-outline-light'?: boolean
    /**
     * Add Bootstrap's `.btn-outline-dark` class to the element.
     */
    'btn-outline-dark'?: boolean
    /**
     * Add Bootstrap's `.btn-link` class to the element.
     */
    'btn-link'?: boolean
    /**
     * Add Bootstrap's `.btn-lg` class to the element.
     */
    'btn-lg'?: boolean
    /**
     * Add Bootstrap's `.btn-group-lg` class to the element.
     */
    'btn-group-lg'?: boolean
    /**
     * Add Bootstrap's `.btn-sm` class to the element.
     */
    'btn-sm'?: boolean
    /**
     * Add Bootstrap's `.btn-group-sm` class to the element.
     */
    'btn-group-sm'?: boolean
    /**
     * Add Bootstrap's `.btn-block` class to the element.
     */
    'btn-block'?: boolean
    /**
     * Add Bootstrap's `.fade` class to the element.
     */
    fade?: boolean
    /**
     * Add Bootstrap's `.collapse` class to the element.
     */
    collapse?: boolean
    /**
     * Add Bootstrap's `.collapsing` class to the element.
     */
    collapsing?: boolean
    /**
     * Add Bootstrap's `.dropup` class to the element.
     */
    dropup?: boolean
    /**
     * Add Bootstrap's `.dropright` class to the element.
     */
    dropright?: boolean
    /**
     * Add Bootstrap's `.dropdown` class to the element.
     */
    dropdown?: boolean
    /**
     * Add Bootstrap's `.dropleft` class to the element.
     */
    dropleft?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu` class to the element.
     */
    'dropdown-menu'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-left` class to the element.
     */
    'dropdown-menu-left'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-right` class to the element.
     */
    'dropdown-menu-right'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-sm-left` class to the element.
     */
    'dropdown-menu-sm-left'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-sm-right` class to the element.
     */
    'dropdown-menu-sm-right'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-md-left` class to the element.
     */
    'dropdown-menu-md-left'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-md-right` class to the element.
     */
    'dropdown-menu-md-right'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-lg-left` class to the element.
     */
    'dropdown-menu-lg-left'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-lg-right` class to the element.
     */
    'dropdown-menu-lg-right'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-xl-left` class to the element.
     */
    'dropdown-menu-xl-left'?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-xl-right` class to the element.
     */
    'dropdown-menu-xl-right'?: boolean
    /**
     * Add Bootstrap's `.dropdown-divider` class to the element.
     */
    'dropdown-divider'?: boolean
    /**
     * Add Bootstrap's `.dropdown-item` class to the element.
     */
    'dropdown-item'?: boolean
    /**
     * Add Bootstrap's `.dropdown-header` class to the element.
     */
    'dropdown-header'?: boolean
    /**
     * Add Bootstrap's `.dropdown-item-text` class to the element.
     */
    'dropdown-item-text'?: boolean
    /**
     * Add Bootstrap's `.btn-group` class to the element.
     */
    'btn-group'?: boolean
    /**
     * Add Bootstrap's `.btn-group-vertical` class to the element.
     */
    'btn-group-vertical'?: boolean
    /**
     * Add Bootstrap's `.btn-toolbar` class to the element.
     */
    'btn-toolbar'?: boolean
    /**
     * Add Bootstrap's `.dropdown-toggle-split` class to the element.
     */
    'dropdown-toggle-split'?: boolean
    /**
     * Add Bootstrap's `.btn-group-toggle` class to the element.
     */
    'btn-group-toggle'?: boolean
    /**
     * Add Bootstrap's `.custom-file` class to the element.
     */
    'custom-file'?: boolean
    /**
     * Add Bootstrap's `.input-group-prepend` class to the element.
     */
    'input-group-prepend'?: boolean
    /**
     * Add Bootstrap's `.input-group-append` class to the element.
     */
    'input-group-append'?: boolean
    /**
     * Add Bootstrap's `.input-group-text` class to the element.
     */
    'input-group-text'?: boolean
    /**
     * Add Bootstrap's `.input-group-lg` class to the element.
     */
    'input-group-lg'?: boolean
    /**
     * Add Bootstrap's `.input-group-sm` class to the element.
     */
    'input-group-sm'?: boolean
    /**
     * Add Bootstrap's `.custom-control-inline` class to the element.
     */
    'custom-control-inline'?: boolean
    /**
     * Add Bootstrap's `.custom-checkbox` class to the element.
     */
    'custom-checkbox'?: boolean
    /**
     * Add Bootstrap's `.custom-radio` class to the element.
     */
    'custom-radio'?: boolean
    /**
     * Add Bootstrap's `.custom-switch` class to the element.
     */
    'custom-switch'?: boolean
    /**
     * Add Bootstrap's `.custom-select-sm` class to the element.
     */
    'custom-select-sm'?: boolean
    /**
     * Add Bootstrap's `.custom-select-lg` class to the element.
     */
    'custom-select-lg'?: boolean
    /**
     * Add Bootstrap's `.custom-range` class to the element.
     */
    'custom-range'?: boolean
    /**
     * Add Bootstrap's `.nav` class to the element.
     */
    nav?: boolean
    /**
     * Add Bootstrap's `.nav-link` class to the element.
     */
    'nav-link'?: boolean
    /**
     * Add Bootstrap's `.nav-tabs` class to the element.
     */
    'nav-tabs'?: boolean
    /**
     * Add Bootstrap's `.nav-item` class to the element.
     */
    'nav-item'?: boolean
    /**
     * Add Bootstrap's `.nav-pills` class to the element.
     */
    'nav-pills'?: boolean
    /**
     * Add Bootstrap's `.nav-fill` class to the element.
     */
    'nav-fill'?: boolean
    /**
     * Add Bootstrap's `.nav-justified` class to the element.
     */
    'nav-justified'?: boolean
    /**
     * Add Bootstrap's `.tab-content` class to the element.
     */
    'tab-content'?: boolean
    /**
     * Add Bootstrap's `.tab-pane` class to the element.
     */
    'tab-pane'?: boolean
    /**
     * Add Bootstrap's `.navbar` class to the element.
     */
    navbar?: boolean
    /**
     * Add Bootstrap's `.navbar-brand` class to the element.
     */
    'navbar-brand'?: boolean
    /**
     * Add Bootstrap's `.navbar-nav` class to the element.
     */
    'navbar-nav'?: boolean
    /**
     * Add Bootstrap's `.navbar-text` class to the element.
     */
    'navbar-text'?: boolean
    /**
     * Add Bootstrap's `.navbar-collapse` class to the element.
     */
    'navbar-collapse'?: boolean
    /**
     * Add Bootstrap's `.navbar-toggler` class to the element.
     */
    'navbar-toggler'?: boolean
    /**
     * Add Bootstrap's `.navbar-toggler-icon` class to the element.
     */
    'navbar-toggler-icon'?: boolean
    /**
     * Add Bootstrap's `.navbar-expand-sm` class to the element.
     */
    'navbar-expand-sm'?: boolean
    /**
     * Add Bootstrap's `.navbar-expand-md` class to the element.
     */
    'navbar-expand-md'?: boolean
    /**
     * Add Bootstrap's `.navbar-expand-lg` class to the element.
     */
    'navbar-expand-lg'?: boolean
    /**
     * Add Bootstrap's `.navbar-expand-xl` class to the element.
     */
    'navbar-expand-xl'?: boolean
    /**
     * Add Bootstrap's `.navbar-expand` class to the element.
     */
    'navbar-expand'?: boolean
    /**
     * Add Bootstrap's `.navbar-light` class to the element.
     */
    'navbar-light'?: boolean
    /**
     * Add Bootstrap's `.navbar-dark` class to the element.
     */
    'navbar-dark'?: boolean
    /**
     * Add Bootstrap's `.card` class to the element.
     */
    card?: boolean
    /**
     * Add Bootstrap's `.list-group` class to the element.
     */
    'list-group'?: boolean
    /**
     * Add Bootstrap's `.list-group-item` class to the element.
     */
    'list-group-item'?: boolean
    /**
     * Add Bootstrap's `.card-body` class to the element.
     */
    'card-body'?: boolean
    /**
     * Add Bootstrap's `.card-title` class to the element.
     */
    'card-title'?: boolean
    /**
     * Add Bootstrap's `.card-subtitle` class to the element.
     */
    'card-subtitle'?: boolean
    /**
     * Add Bootstrap's `.card-text` class to the element.
     */
    'card-text'?: boolean
    /**
     * Add Bootstrap's `.card-link` class to the element.
     */
    'card-link'?: boolean
    /**
     * Add Bootstrap's `.card-header` class to the element.
     */
    'card-header'?: boolean
    /**
     * Add Bootstrap's `.card-footer` class to the element.
     */
    'card-footer'?: boolean
    /**
     * Add Bootstrap's `.card-header-tabs` class to the element.
     */
    'card-header-tabs'?: boolean
    /**
     * Add Bootstrap's `.card-header-pills` class to the element.
     */
    'card-header-pills'?: boolean
    /**
     * Add Bootstrap's `.card-img-overlay` class to the element.
     */
    'card-img-overlay'?: boolean
    /**
     * Add Bootstrap's `.card-img` class to the element.
     */
    'card-img'?: boolean
    /**
     * Add Bootstrap's `.card-img-top` class to the element.
     */
    'card-img-top'?: boolean
    /**
     * Add Bootstrap's `.card-img-bottom` class to the element.
     */
    'card-img-bottom'?: boolean
    /**
     * Add Bootstrap's `.card-deck` class to the element.
     */
    'card-deck'?: boolean
    /**
     * Add Bootstrap's `.card-group` class to the element.
     */
    'card-group'?: boolean
    /**
     * Add Bootstrap's `.card-columns` class to the element.
     */
    'card-columns'?: boolean
    /**
     * Add Bootstrap's `.accordion` class to the element.
     */
    accordion?: boolean
    /**
     * Add Bootstrap's `.breadcrumb` class to the element.
     */
    breadcrumb?: boolean
    /**
     * Add Bootstrap's `.breadcrumb-item` class to the element.
     */
    'breadcrumb-item'?: boolean
    /**
     * Add Bootstrap's `.pagination` class to the element.
     */
    pagination?: boolean
    /**
     * Add Bootstrap's `.page-link` class to the element.
     */
    'page-link'?: boolean
    /**
     * Add Bootstrap's `.page-item` class to the element.
     */
    'page-item'?: boolean
    /**
     * Add Bootstrap's `.pagination-lg` class to the element.
     */
    'pagination-lg'?: boolean
    /**
     * Add Bootstrap's `.pagination-sm` class to the element.
     */
    'pagination-sm'?: boolean
    /**
     * Add Bootstrap's `.badge` class to the element.
     */
    badge?: boolean
    /**
     * Add Bootstrap's `.badge-pill` class to the element.
     */
    'badge-pill'?: boolean
    /**
     * Add Bootstrap's `.badge-primary` class to the element.
     */
    'badge-primary'?: boolean
    /**
     * Add Bootstrap's `.badge-secondary` class to the element.
     */
    'badge-secondary'?: boolean
    /**
     * Add Bootstrap's `.badge-success` class to the element.
     */
    'badge-success'?: boolean
    /**
     * Add Bootstrap's `.badge-info` class to the element.
     */
    'badge-info'?: boolean
    /**
     * Add Bootstrap's `.badge-warning` class to the element.
     */
    'badge-warning'?: boolean
    /**
     * Add Bootstrap's `.badge-danger` class to the element.
     */
    'badge-danger'?: boolean
    /**
     * Add Bootstrap's `.badge-light` class to the element.
     */
    'badge-light'?: boolean
    /**
     * Add Bootstrap's `.badge-dark` class to the element.
     */
    'badge-dark'?: boolean
    /**
     * Add Bootstrap's `.jumbotron` class to the element.
     */
    jumbotron?: boolean
    /**
     * Add Bootstrap's `.jumbotron-fluid` class to the element.
     */
    'jumbotron-fluid'?: boolean
    /**
     * Add Bootstrap's `.alert` class to the element.
     */
    alert?: boolean
    /**
     * Add Bootstrap's `.alert-heading` class to the element.
     */
    'alert-heading'?: boolean
    /**
     * Add Bootstrap's `.alert-link` class to the element.
     */
    'alert-link'?: boolean
    /**
     * Add Bootstrap's `.alert-dismissible` class to the element.
     */
    'alert-dismissible'?: boolean
    /**
     * Add Bootstrap's `.close` class to the element.
     */
    close?: boolean
    /**
     * Add Bootstrap's `.alert-primary` class to the element.
     */
    'alert-primary'?: boolean
    /**
     * Add Bootstrap's `.alert-secondary` class to the element.
     */
    'alert-secondary'?: boolean
    /**
     * Add Bootstrap's `.alert-success` class to the element.
     */
    'alert-success'?: boolean
    /**
     * Add Bootstrap's `.alert-info` class to the element.
     */
    'alert-info'?: boolean
    /**
     * Add Bootstrap's `.alert-warning` class to the element.
     */
    'alert-warning'?: boolean
    /**
     * Add Bootstrap's `.alert-danger` class to the element.
     */
    'alert-danger'?: boolean
    /**
     * Add Bootstrap's `.alert-light` class to the element.
     */
    'alert-light'?: boolean
    /**
     * Add Bootstrap's `.alert-dark` class to the element.
     */
    'alert-dark'?: boolean
    /**
     * Add Bootstrap's `.progress` class to the element.
     */
    progress?: boolean
    /**
     * Add Bootstrap's `.progress-bar` class to the element.
     */
    'progress-bar'?: boolean
    /**
     * Add Bootstrap's `.progress-bar-striped` class to the element.
     */
    'progress-bar-striped'?: boolean
    /**
     * Add Bootstrap's `.progress-bar-animated` class to the element.
     */
    'progress-bar-animated'?: boolean
    /**
     * Add Bootstrap's `.media` class to the element.
     */
    media?: boolean
    /**
     * Add Bootstrap's `.media-body` class to the element.
     */
    'media-body'?: boolean
    /**
     * Add Bootstrap's `.list-group-item-action` class to the element.
     */
    'list-group-item-action'?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal` class to the element.
     */
    'list-group-horizontal'?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal-sm` class to the element.
     */
    'list-group-horizontal-sm'?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal-md` class to the element.
     */
    'list-group-horizontal-md'?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal-lg` class to the element.
     */
    'list-group-horizontal-lg'?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal-xl` class to the element.
     */
    'list-group-horizontal-xl'?: boolean
    /**
     * Add Bootstrap's `.list-group-flush` class to the element.
     */
    'list-group-flush'?: boolean
    /**
     * Add Bootstrap's `.list-group-item-primary` class to the element.
     */
    'list-group-item-primary'?: boolean
    /**
     * Add Bootstrap's `.list-group-item-secondary` class to the element.
     */
    'list-group-item-secondary'?: boolean
    /**
     * Add Bootstrap's `.list-group-item-success` class to the element.
     */
    'list-group-item-success'?: boolean
    /**
     * Add Bootstrap's `.list-group-item-info` class to the element.
     */
    'list-group-item-info'?: boolean
    /**
     * Add Bootstrap's `.list-group-item-warning` class to the element.
     */
    'list-group-item-warning'?: boolean
    /**
     * Add Bootstrap's `.list-group-item-danger` class to the element.
     */
    'list-group-item-danger'?: boolean
    /**
     * Add Bootstrap's `.list-group-item-light` class to the element.
     */
    'list-group-item-light'?: boolean
    /**
     * Add Bootstrap's `.list-group-item-dark` class to the element.
     */
    'list-group-item-dark'?: boolean
    /**
     * Add Bootstrap's `.toast` class to the element.
     */
    toast?: boolean
    /**
     * Add Bootstrap's `.showing` class to the element.
     */
    showing?: boolean
    /**
     * Add Bootstrap's `.hide` class to the element.
     */
    hide?: boolean
    /**
     * Add Bootstrap's `.toast-header` class to the element.
     */
    'toast-header'?: boolean
    /**
     * Add Bootstrap's `.toast-body` class to the element.
     */
    'toast-body'?: boolean
    /**
     * Add Bootstrap's `.modal-open` class to the element.
     */
    'modal-open'?: boolean
    /**
     * Add Bootstrap's `.modal` class to the element.
     */
    modal?: boolean
    /**
     * Add Bootstrap's `.modal-dialog` class to the element.
     */
    'modal-dialog'?: boolean
    /**
     * Add Bootstrap's `.modal-static` class to the element.
     */
    'modal-static'?: boolean
    /**
     * Add Bootstrap's `.modal-dialog-scrollable` class to the element.
     */
    'modal-dialog-scrollable'?: boolean
    /**
     * Add Bootstrap's `.modal-content` class to the element.
     */
    'modal-content'?: boolean
    /**
     * Add Bootstrap's `.modal-header` class to the element.
     */
    'modal-header'?: boolean
    /**
     * Add Bootstrap's `.modal-footer` class to the element.
     */
    'modal-footer'?: boolean
    /**
     * Add Bootstrap's `.modal-body` class to the element.
     */
    'modal-body'?: boolean
    /**
     * Add Bootstrap's `.modal-dialog-centered` class to the element.
     */
    'modal-dialog-centered'?: boolean
    /**
     * Add Bootstrap's `.modal-backdrop` class to the element.
     */
    'modal-backdrop'?: boolean
    /**
     * Add Bootstrap's `.modal-title` class to the element.
     */
    'modal-title'?: boolean
    /**
     * Add Bootstrap's `.modal-scrollbar-measure` class to the element.
     */
    'modal-scrollbar-measure'?: boolean
    /**
     * Add Bootstrap's `.modal-sm` class to the element.
     */
    'modal-sm'?: boolean
    /**
     * Add Bootstrap's `.modal-lg` class to the element.
     */
    'modal-lg'?: boolean
    /**
     * Add Bootstrap's `.modal-xl` class to the element.
     */
    'modal-xl'?: boolean
    /**
     * Add Bootstrap's `.tooltip` class to the element.
     */
    tooltip?: boolean
    /**
     * Add Bootstrap's `.arrow` class to the element.
     */
    arrow?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-top` class to the element.
     */
    'bs-tooltip-top'?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-auto` class to the element.
     */
    'bs-tooltip-auto'?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-right` class to the element.
     */
    'bs-tooltip-right'?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-bottom` class to the element.
     */
    'bs-tooltip-bottom'?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-left` class to the element.
     */
    'bs-tooltip-left'?: boolean
    /**
     * Add Bootstrap's `.tooltip-inner` class to the element.
     */
    'tooltip-inner'?: boolean
    /**
     * Add Bootstrap's `.popover` class to the element.
     */
    popover?: boolean
    /**
     * Add Bootstrap's `.bs-popover-top` class to the element.
     */
    'bs-popover-top'?: boolean
    /**
     * Add Bootstrap's `.bs-popover-auto` class to the element.
     */
    'bs-popover-auto'?: boolean
    /**
     * Add Bootstrap's `.bs-popover-right` class to the element.
     */
    'bs-popover-right'?: boolean
    /**
     * Add Bootstrap's `.bs-popover-bottom` class to the element.
     */
    'bs-popover-bottom'?: boolean
    /**
     * Add Bootstrap's `.popover-header` class to the element.
     */
    'popover-header'?: boolean
    /**
     * Add Bootstrap's `.bs-popover-left` class to the element.
     */
    'bs-popover-left'?: boolean
    /**
     * Add Bootstrap's `.popover-body` class to the element.
     */
    'popover-body'?: boolean
    /**
     * Add Bootstrap's `.carousel` class to the element.
     */
    carousel?: boolean
    /**
     * Add Bootstrap's `.pointer-event` class to the element.
     */
    'pointer-event'?: boolean
    /**
     * Add Bootstrap's `.carousel-inner` class to the element.
     */
    'carousel-inner'?: boolean
    /**
     * Add Bootstrap's `.carousel-item` class to the element.
     */
    'carousel-item'?: boolean
    /**
     * Add Bootstrap's `.carousel-item-next` class to the element.
     */
    'carousel-item-next'?: boolean
    /**
     * Add Bootstrap's `.carousel-item-prev` class to the element.
     */
    'carousel-item-prev'?: boolean
    /**
     * Add Bootstrap's `.carousel-item-left` class to the element.
     */
    'carousel-item-left'?: boolean
    /**
     * Add Bootstrap's `.carousel-item-right` class to the element.
     */
    'carousel-item-right'?: boolean
    /**
     * Add Bootstrap's `.carousel-fade` class to the element.
     */
    'carousel-fade'?: boolean
    /**
     * Add Bootstrap's `.carousel-control-prev` class to the element.
     */
    'carousel-control-prev'?: boolean
    /**
     * Add Bootstrap's `.carousel-control-next` class to the element.
     */
    'carousel-control-next'?: boolean
    /**
     * Add Bootstrap's `.carousel-control-prev-icon` class to the element.
     */
    'carousel-control-prev-icon'?: boolean
    /**
     * Add Bootstrap's `.carousel-control-next-icon` class to the element.
     */
    'carousel-control-next-icon'?: boolean
    /**
     * Add Bootstrap's `.carousel-indicators` class to the element.
     */
    'carousel-indicators'?: boolean
    /**
     * Add Bootstrap's `.carousel-caption` class to the element.
     */
    'carousel-caption'?: boolean
    /**
     * Add Bootstrap's `.spinner-border` class to the element.
     */
    'spinner-border'?: boolean
    /**
     * Add Bootstrap's `.spinner-border-sm` class to the element.
     */
    'spinner-border-sm'?: boolean
    /**
     * Add Bootstrap's `.spinner-grow` class to the element.
     */
    'spinner-grow'?: boolean
    /**
     * Add Bootstrap's `.spinner-grow-sm` class to the element.
     */
    'spinner-grow-sm'?: boolean
    /**
     * Add Bootstrap's `.align-baseline` class to the element.
     */
    'align-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-top` class to the element.
     */
    'align-top'?: boolean
    /**
     * Add Bootstrap's `.align-middle` class to the element.
     */
    'align-middle'?: boolean
    /**
     * Add Bootstrap's `.align-bottom` class to the element.
     */
    'align-bottom'?: boolean
    /**
     * Add Bootstrap's `.align-text-bottom` class to the element.
     */
    'align-text-bottom'?: boolean
    /**
     * Add Bootstrap's `.align-text-top` class to the element.
     */
    'align-text-top'?: boolean
    /**
     * Add Bootstrap's `.bg-primary` class to the element.
     */
    'bg-primary'?: boolean
    /**
     * Add Bootstrap's `.bg-secondary` class to the element.
     */
    'bg-secondary'?: boolean
    /**
     * Add Bootstrap's `.bg-success` class to the element.
     */
    'bg-success'?: boolean
    /**
     * Add Bootstrap's `.bg-info` class to the element.
     */
    'bg-info'?: boolean
    /**
     * Add Bootstrap's `.bg-warning` class to the element.
     */
    'bg-warning'?: boolean
    /**
     * Add Bootstrap's `.bg-danger` class to the element.
     */
    'bg-danger'?: boolean
    /**
     * Add Bootstrap's `.bg-light` class to the element.
     */
    'bg-light'?: boolean
    /**
     * Add Bootstrap's `.bg-dark` class to the element.
     */
    'bg-dark'?: boolean
    /**
     * Add Bootstrap's `.bg-white` class to the element.
     */
    'bg-white'?: boolean
    /**
     * Add Bootstrap's `.bg-transparent` class to the element.
     */
    'bg-transparent'?: boolean
    /**
     * Add Bootstrap's `.border` class to the element.
     */
    border?: boolean
    /**
     * Add Bootstrap's `.border-top` class to the element.
     */
    'border-top'?: boolean
    /**
     * Add Bootstrap's `.border-right` class to the element.
     */
    'border-right'?: boolean
    /**
     * Add Bootstrap's `.border-bottom` class to the element.
     */
    'border-bottom'?: boolean
    /**
     * Add Bootstrap's `.border-left` class to the element.
     */
    'border-left'?: boolean
    /**
     * Add Bootstrap's `.border-0` class to the element.
     */
    'border-0'?: boolean
    /**
     * Add Bootstrap's `.border-top-0` class to the element.
     */
    'border-top-0'?: boolean
    /**
     * Add Bootstrap's `.border-right-0` class to the element.
     */
    'border-right-0'?: boolean
    /**
     * Add Bootstrap's `.border-bottom-0` class to the element.
     */
    'border-bottom-0'?: boolean
    /**
     * Add Bootstrap's `.border-left-0` class to the element.
     */
    'border-left-0'?: boolean
    /**
     * Add Bootstrap's `.border-primary` class to the element.
     */
    'border-primary'?: boolean
    /**
     * Add Bootstrap's `.border-secondary` class to the element.
     */
    'border-secondary'?: boolean
    /**
     * Add Bootstrap's `.border-success` class to the element.
     */
    'border-success'?: boolean
    /**
     * Add Bootstrap's `.border-info` class to the element.
     */
    'border-info'?: boolean
    /**
     * Add Bootstrap's `.border-warning` class to the element.
     */
    'border-warning'?: boolean
    /**
     * Add Bootstrap's `.border-danger` class to the element.
     */
    'border-danger'?: boolean
    /**
     * Add Bootstrap's `.border-light` class to the element.
     */
    'border-light'?: boolean
    /**
     * Add Bootstrap's `.border-dark` class to the element.
     */
    'border-dark'?: boolean
    /**
     * Add Bootstrap's `.border-white` class to the element.
     */
    'border-white'?: boolean
    /**
     * Add Bootstrap's `.rounded-sm` class to the element.
     */
    'rounded-sm'?: boolean
    /**
     * Add Bootstrap's `.rounded` class to the element.
     */
    rounded?: boolean
    /**
     * Add Bootstrap's `.rounded-top` class to the element.
     */
    'rounded-top'?: boolean
    /**
     * Add Bootstrap's `.rounded-right` class to the element.
     */
    'rounded-right'?: boolean
    /**
     * Add Bootstrap's `.rounded-bottom` class to the element.
     */
    'rounded-bottom'?: boolean
    /**
     * Add Bootstrap's `.rounded-left` class to the element.
     */
    'rounded-left'?: boolean
    /**
     * Add Bootstrap's `.rounded-lg` class to the element.
     */
    'rounded-lg'?: boolean
    /**
     * Add Bootstrap's `.rounded-circle` class to the element.
     */
    'rounded-circle'?: boolean
    /**
     * Add Bootstrap's `.rounded-pill` class to the element.
     */
    'rounded-pill'?: boolean
    /**
     * Add Bootstrap's `.rounded-0` class to the element.
     */
    'rounded-0'?: boolean
    /**
     * Add Bootstrap's `.clearfix` class to the element.
     */
    clearfix?: boolean
    /**
     * Add Bootstrap's `.d-none` class to the element.
     */
    'd-none'?: boolean
    /**
     * Add Bootstrap's `.d-inline` class to the element.
     */
    'd-inline'?: boolean
    /**
     * Add Bootstrap's `.d-inline-block` class to the element.
     */
    'd-inline-block'?: boolean
    /**
     * Add Bootstrap's `.d-block` class to the element.
     */
    'd-block'?: boolean
    /**
     * Add Bootstrap's `.d-table` class to the element.
     */
    'd-table'?: boolean
    /**
     * Add Bootstrap's `.d-table-row` class to the element.
     */
    'd-table-row'?: boolean
    /**
     * Add Bootstrap's `.d-table-cell` class to the element.
     */
    'd-table-cell'?: boolean
    /**
     * Add Bootstrap's `.d-flex` class to the element.
     */
    'd-flex'?: boolean
    /**
     * Add Bootstrap's `.d-inline-flex` class to the element.
     */
    'd-inline-flex'?: boolean
    /**
     * Add Bootstrap's `.d-sm-none` class to the element.
     */
    'd-sm-none'?: boolean
    /**
     * Add Bootstrap's `.d-sm-inline` class to the element.
     */
    'd-sm-inline'?: boolean
    /**
     * Add Bootstrap's `.d-sm-inline-block` class to the element.
     */
    'd-sm-inline-block'?: boolean
    /**
     * Add Bootstrap's `.d-sm-block` class to the element.
     */
    'd-sm-block'?: boolean
    /**
     * Add Bootstrap's `.d-sm-table` class to the element.
     */
    'd-sm-table'?: boolean
    /**
     * Add Bootstrap's `.d-sm-table-row` class to the element.
     */
    'd-sm-table-row'?: boolean
    /**
     * Add Bootstrap's `.d-sm-table-cell` class to the element.
     */
    'd-sm-table-cell'?: boolean
    /**
     * Add Bootstrap's `.d-sm-flex` class to the element.
     */
    'd-sm-flex'?: boolean
    /**
     * Add Bootstrap's `.d-sm-inline-flex` class to the element.
     */
    'd-sm-inline-flex'?: boolean
    /**
     * Add Bootstrap's `.d-md-none` class to the element.
     */
    'd-md-none'?: boolean
    /**
     * Add Bootstrap's `.d-md-inline` class to the element.
     */
    'd-md-inline'?: boolean
    /**
     * Add Bootstrap's `.d-md-inline-block` class to the element.
     */
    'd-md-inline-block'?: boolean
    /**
     * Add Bootstrap's `.d-md-block` class to the element.
     */
    'd-md-block'?: boolean
    /**
     * Add Bootstrap's `.d-md-table` class to the element.
     */
    'd-md-table'?: boolean
    /**
     * Add Bootstrap's `.d-md-table-row` class to the element.
     */
    'd-md-table-row'?: boolean
    /**
     * Add Bootstrap's `.d-md-table-cell` class to the element.
     */
    'd-md-table-cell'?: boolean
    /**
     * Add Bootstrap's `.d-md-flex` class to the element.
     */
    'd-md-flex'?: boolean
    /**
     * Add Bootstrap's `.d-md-inline-flex` class to the element.
     */
    'd-md-inline-flex'?: boolean
    /**
     * Add Bootstrap's `.d-lg-none` class to the element.
     */
    'd-lg-none'?: boolean
    /**
     * Add Bootstrap's `.d-lg-inline` class to the element.
     */
    'd-lg-inline'?: boolean
    /**
     * Add Bootstrap's `.d-lg-inline-block` class to the element.
     */
    'd-lg-inline-block'?: boolean
    /**
     * Add Bootstrap's `.d-lg-block` class to the element.
     */
    'd-lg-block'?: boolean
    /**
     * Add Bootstrap's `.d-lg-table` class to the element.
     */
    'd-lg-table'?: boolean
    /**
     * Add Bootstrap's `.d-lg-table-row` class to the element.
     */
    'd-lg-table-row'?: boolean
    /**
     * Add Bootstrap's `.d-lg-table-cell` class to the element.
     */
    'd-lg-table-cell'?: boolean
    /**
     * Add Bootstrap's `.d-lg-flex` class to the element.
     */
    'd-lg-flex'?: boolean
    /**
     * Add Bootstrap's `.d-lg-inline-flex` class to the element.
     */
    'd-lg-inline-flex'?: boolean
    /**
     * Add Bootstrap's `.d-xl-none` class to the element.
     */
    'd-xl-none'?: boolean
    /**
     * Add Bootstrap's `.d-xl-inline` class to the element.
     */
    'd-xl-inline'?: boolean
    /**
     * Add Bootstrap's `.d-xl-inline-block` class to the element.
     */
    'd-xl-inline-block'?: boolean
    /**
     * Add Bootstrap's `.d-xl-block` class to the element.
     */
    'd-xl-block'?: boolean
    /**
     * Add Bootstrap's `.d-xl-table` class to the element.
     */
    'd-xl-table'?: boolean
    /**
     * Add Bootstrap's `.d-xl-table-row` class to the element.
     */
    'd-xl-table-row'?: boolean
    /**
     * Add Bootstrap's `.d-xl-table-cell` class to the element.
     */
    'd-xl-table-cell'?: boolean
    /**
     * Add Bootstrap's `.d-xl-flex` class to the element.
     */
    'd-xl-flex'?: boolean
    /**
     * Add Bootstrap's `.d-xl-inline-flex` class to the element.
     */
    'd-xl-inline-flex'?: boolean
    /**
     * Add Bootstrap's `.d-print-none` class to the element.
     */
    'd-print-none'?: boolean
    /**
     * Add Bootstrap's `.d-print-inline` class to the element.
     */
    'd-print-inline'?: boolean
    /**
     * Add Bootstrap's `.d-print-inline-block` class to the element.
     */
    'd-print-inline-block'?: boolean
    /**
     * Add Bootstrap's `.d-print-block` class to the element.
     */
    'd-print-block'?: boolean
    /**
     * Add Bootstrap's `.d-print-table` class to the element.
     */
    'd-print-table'?: boolean
    /**
     * Add Bootstrap's `.d-print-table-row` class to the element.
     */
    'd-print-table-row'?: boolean
    /**
     * Add Bootstrap's `.d-print-table-cell` class to the element.
     */
    'd-print-table-cell'?: boolean
    /**
     * Add Bootstrap's `.d-print-flex` class to the element.
     */
    'd-print-flex'?: boolean
    /**
     * Add Bootstrap's `.d-print-inline-flex` class to the element.
     */
    'd-print-inline-flex'?: boolean
    /**
     * Add Bootstrap's `.embed-responsive` class to the element.
     */
    'embed-responsive'?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-item` class to the element.
     */
    'embed-responsive-item'?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-21by9` class to the element.
     */
    'embed-responsive-21by9'?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-16by9` class to the element.
     */
    'embed-responsive-16by9'?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-4by3` class to the element.
     */
    'embed-responsive-4by3'?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-1by1` class to the element.
     */
    'embed-responsive-1by1'?: boolean
    /**
     * Add Bootstrap's `.flex-row` class to the element.
     */
    'flex-row'?: boolean
    /**
     * Add Bootstrap's `.flex-column` class to the element.
     */
    'flex-column'?: boolean
    /**
     * Add Bootstrap's `.flex-row-reverse` class to the element.
     */
    'flex-row-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-column-reverse` class to the element.
     */
    'flex-column-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-wrap` class to the element.
     */
    'flex-wrap'?: boolean
    /**
     * Add Bootstrap's `.flex-nowrap` class to the element.
     */
    'flex-nowrap'?: boolean
    /**
     * Add Bootstrap's `.flex-wrap-reverse` class to the element.
     */
    'flex-wrap-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-fill` class to the element.
     */
    'flex-fill'?: boolean
    /**
     * Add Bootstrap's `.flex-grow-0` class to the element.
     */
    'flex-grow-0'?: boolean
    /**
     * Add Bootstrap's `.flex-grow-1` class to the element.
     */
    'flex-grow-1'?: boolean
    /**
     * Add Bootstrap's `.flex-shrink-0` class to the element.
     */
    'flex-shrink-0'?: boolean
    /**
     * Add Bootstrap's `.flex-shrink-1` class to the element.
     */
    'flex-shrink-1'?: boolean
    /**
     * Add Bootstrap's `.justify-content-start` class to the element.
     */
    'justify-content-start'?: boolean
    /**
     * Add Bootstrap's `.justify-content-end` class to the element.
     */
    'justify-content-end'?: boolean
    /**
     * Add Bootstrap's `.justify-content-center` class to the element.
     */
    'justify-content-center'?: boolean
    /**
     * Add Bootstrap's `.justify-content-between` class to the element.
     */
    'justify-content-between'?: boolean
    /**
     * Add Bootstrap's `.justify-content-around` class to the element.
     */
    'justify-content-around'?: boolean
    /**
     * Add Bootstrap's `.align-items-start` class to the element.
     */
    'align-items-start'?: boolean
    /**
     * Add Bootstrap's `.align-items-end` class to the element.
     */
    'align-items-end'?: boolean
    /**
     * Add Bootstrap's `.align-items-center` class to the element.
     */
    'align-items-center'?: boolean
    /**
     * Add Bootstrap's `.align-items-baseline` class to the element.
     */
    'align-items-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-items-stretch` class to the element.
     */
    'align-items-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-content-start` class to the element.
     */
    'align-content-start'?: boolean
    /**
     * Add Bootstrap's `.align-content-end` class to the element.
     */
    'align-content-end'?: boolean
    /**
     * Add Bootstrap's `.align-content-center` class to the element.
     */
    'align-content-center'?: boolean
    /**
     * Add Bootstrap's `.align-content-between` class to the element.
     */
    'align-content-between'?: boolean
    /**
     * Add Bootstrap's `.align-content-around` class to the element.
     */
    'align-content-around'?: boolean
    /**
     * Add Bootstrap's `.align-content-stretch` class to the element.
     */
    'align-content-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-self-auto` class to the element.
     */
    'align-self-auto'?: boolean
    /**
     * Add Bootstrap's `.align-self-start` class to the element.
     */
    'align-self-start'?: boolean
    /**
     * Add Bootstrap's `.align-self-end` class to the element.
     */
    'align-self-end'?: boolean
    /**
     * Add Bootstrap's `.align-self-center` class to the element.
     */
    'align-self-center'?: boolean
    /**
     * Add Bootstrap's `.align-self-baseline` class to the element.
     */
    'align-self-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-self-stretch` class to the element.
     */
    'align-self-stretch'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-row` class to the element.
     */
    'flex-sm-row'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-column` class to the element.
     */
    'flex-sm-column'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-row-reverse` class to the element.
     */
    'flex-sm-row-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-column-reverse` class to the element.
     */
    'flex-sm-column-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-wrap` class to the element.
     */
    'flex-sm-wrap'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-nowrap` class to the element.
     */
    'flex-sm-nowrap'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-wrap-reverse` class to the element.
     */
    'flex-sm-wrap-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-fill` class to the element.
     */
    'flex-sm-fill'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-grow-0` class to the element.
     */
    'flex-sm-grow-0'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-grow-1` class to the element.
     */
    'flex-sm-grow-1'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-shrink-0` class to the element.
     */
    'flex-sm-shrink-0'?: boolean
    /**
     * Add Bootstrap's `.flex-sm-shrink-1` class to the element.
     */
    'flex-sm-shrink-1'?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-start` class to the element.
     */
    'justify-content-sm-start'?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-end` class to the element.
     */
    'justify-content-sm-end'?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-center` class to the element.
     */
    'justify-content-sm-center'?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-between` class to the element.
     */
    'justify-content-sm-between'?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-around` class to the element.
     */
    'justify-content-sm-around'?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-start` class to the element.
     */
    'align-items-sm-start'?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-end` class to the element.
     */
    'align-items-sm-end'?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-center` class to the element.
     */
    'align-items-sm-center'?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-baseline` class to the element.
     */
    'align-items-sm-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-stretch` class to the element.
     */
    'align-items-sm-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-start` class to the element.
     */
    'align-content-sm-start'?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-end` class to the element.
     */
    'align-content-sm-end'?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-center` class to the element.
     */
    'align-content-sm-center'?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-between` class to the element.
     */
    'align-content-sm-between'?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-around` class to the element.
     */
    'align-content-sm-around'?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-stretch` class to the element.
     */
    'align-content-sm-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-auto` class to the element.
     */
    'align-self-sm-auto'?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-start` class to the element.
     */
    'align-self-sm-start'?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-end` class to the element.
     */
    'align-self-sm-end'?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-center` class to the element.
     */
    'align-self-sm-center'?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-baseline` class to the element.
     */
    'align-self-sm-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-stretch` class to the element.
     */
    'align-self-sm-stretch'?: boolean
    /**
     * Add Bootstrap's `.flex-md-row` class to the element.
     */
    'flex-md-row'?: boolean
    /**
     * Add Bootstrap's `.flex-md-column` class to the element.
     */
    'flex-md-column'?: boolean
    /**
     * Add Bootstrap's `.flex-md-row-reverse` class to the element.
     */
    'flex-md-row-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-md-column-reverse` class to the element.
     */
    'flex-md-column-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-md-wrap` class to the element.
     */
    'flex-md-wrap'?: boolean
    /**
     * Add Bootstrap's `.flex-md-nowrap` class to the element.
     */
    'flex-md-nowrap'?: boolean
    /**
     * Add Bootstrap's `.flex-md-wrap-reverse` class to the element.
     */
    'flex-md-wrap-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-md-fill` class to the element.
     */
    'flex-md-fill'?: boolean
    /**
     * Add Bootstrap's `.flex-md-grow-0` class to the element.
     */
    'flex-md-grow-0'?: boolean
    /**
     * Add Bootstrap's `.flex-md-grow-1` class to the element.
     */
    'flex-md-grow-1'?: boolean
    /**
     * Add Bootstrap's `.flex-md-shrink-0` class to the element.
     */
    'flex-md-shrink-0'?: boolean
    /**
     * Add Bootstrap's `.flex-md-shrink-1` class to the element.
     */
    'flex-md-shrink-1'?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-start` class to the element.
     */
    'justify-content-md-start'?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-end` class to the element.
     */
    'justify-content-md-end'?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-center` class to the element.
     */
    'justify-content-md-center'?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-between` class to the element.
     */
    'justify-content-md-between'?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-around` class to the element.
     */
    'justify-content-md-around'?: boolean
    /**
     * Add Bootstrap's `.align-items-md-start` class to the element.
     */
    'align-items-md-start'?: boolean
    /**
     * Add Bootstrap's `.align-items-md-end` class to the element.
     */
    'align-items-md-end'?: boolean
    /**
     * Add Bootstrap's `.align-items-md-center` class to the element.
     */
    'align-items-md-center'?: boolean
    /**
     * Add Bootstrap's `.align-items-md-baseline` class to the element.
     */
    'align-items-md-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-items-md-stretch` class to the element.
     */
    'align-items-md-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-content-md-start` class to the element.
     */
    'align-content-md-start'?: boolean
    /**
     * Add Bootstrap's `.align-content-md-end` class to the element.
     */
    'align-content-md-end'?: boolean
    /**
     * Add Bootstrap's `.align-content-md-center` class to the element.
     */
    'align-content-md-center'?: boolean
    /**
     * Add Bootstrap's `.align-content-md-between` class to the element.
     */
    'align-content-md-between'?: boolean
    /**
     * Add Bootstrap's `.align-content-md-around` class to the element.
     */
    'align-content-md-around'?: boolean
    /**
     * Add Bootstrap's `.align-content-md-stretch` class to the element.
     */
    'align-content-md-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-self-md-auto` class to the element.
     */
    'align-self-md-auto'?: boolean
    /**
     * Add Bootstrap's `.align-self-md-start` class to the element.
     */
    'align-self-md-start'?: boolean
    /**
     * Add Bootstrap's `.align-self-md-end` class to the element.
     */
    'align-self-md-end'?: boolean
    /**
     * Add Bootstrap's `.align-self-md-center` class to the element.
     */
    'align-self-md-center'?: boolean
    /**
     * Add Bootstrap's `.align-self-md-baseline` class to the element.
     */
    'align-self-md-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-self-md-stretch` class to the element.
     */
    'align-self-md-stretch'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-row` class to the element.
     */
    'flex-lg-row'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-column` class to the element.
     */
    'flex-lg-column'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-row-reverse` class to the element.
     */
    'flex-lg-row-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-column-reverse` class to the element.
     */
    'flex-lg-column-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-wrap` class to the element.
     */
    'flex-lg-wrap'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-nowrap` class to the element.
     */
    'flex-lg-nowrap'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-wrap-reverse` class to the element.
     */
    'flex-lg-wrap-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-fill` class to the element.
     */
    'flex-lg-fill'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-grow-0` class to the element.
     */
    'flex-lg-grow-0'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-grow-1` class to the element.
     */
    'flex-lg-grow-1'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-shrink-0` class to the element.
     */
    'flex-lg-shrink-0'?: boolean
    /**
     * Add Bootstrap's `.flex-lg-shrink-1` class to the element.
     */
    'flex-lg-shrink-1'?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-start` class to the element.
     */
    'justify-content-lg-start'?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-end` class to the element.
     */
    'justify-content-lg-end'?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-center` class to the element.
     */
    'justify-content-lg-center'?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-between` class to the element.
     */
    'justify-content-lg-between'?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-around` class to the element.
     */
    'justify-content-lg-around'?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-start` class to the element.
     */
    'align-items-lg-start'?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-end` class to the element.
     */
    'align-items-lg-end'?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-center` class to the element.
     */
    'align-items-lg-center'?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-baseline` class to the element.
     */
    'align-items-lg-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-stretch` class to the element.
     */
    'align-items-lg-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-start` class to the element.
     */
    'align-content-lg-start'?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-end` class to the element.
     */
    'align-content-lg-end'?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-center` class to the element.
     */
    'align-content-lg-center'?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-between` class to the element.
     */
    'align-content-lg-between'?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-around` class to the element.
     */
    'align-content-lg-around'?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-stretch` class to the element.
     */
    'align-content-lg-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-auto` class to the element.
     */
    'align-self-lg-auto'?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-start` class to the element.
     */
    'align-self-lg-start'?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-end` class to the element.
     */
    'align-self-lg-end'?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-center` class to the element.
     */
    'align-self-lg-center'?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-baseline` class to the element.
     */
    'align-self-lg-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-stretch` class to the element.
     */
    'align-self-lg-stretch'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-row` class to the element.
     */
    'flex-xl-row'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-column` class to the element.
     */
    'flex-xl-column'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-row-reverse` class to the element.
     */
    'flex-xl-row-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-column-reverse` class to the element.
     */
    'flex-xl-column-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-wrap` class to the element.
     */
    'flex-xl-wrap'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-nowrap` class to the element.
     */
    'flex-xl-nowrap'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-wrap-reverse` class to the element.
     */
    'flex-xl-wrap-reverse'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-fill` class to the element.
     */
    'flex-xl-fill'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-grow-0` class to the element.
     */
    'flex-xl-grow-0'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-grow-1` class to the element.
     */
    'flex-xl-grow-1'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-shrink-0` class to the element.
     */
    'flex-xl-shrink-0'?: boolean
    /**
     * Add Bootstrap's `.flex-xl-shrink-1` class to the element.
     */
    'flex-xl-shrink-1'?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-start` class to the element.
     */
    'justify-content-xl-start'?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-end` class to the element.
     */
    'justify-content-xl-end'?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-center` class to the element.
     */
    'justify-content-xl-center'?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-between` class to the element.
     */
    'justify-content-xl-between'?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-around` class to the element.
     */
    'justify-content-xl-around'?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-start` class to the element.
     */
    'align-items-xl-start'?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-end` class to the element.
     */
    'align-items-xl-end'?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-center` class to the element.
     */
    'align-items-xl-center'?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-baseline` class to the element.
     */
    'align-items-xl-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-stretch` class to the element.
     */
    'align-items-xl-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-start` class to the element.
     */
    'align-content-xl-start'?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-end` class to the element.
     */
    'align-content-xl-end'?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-center` class to the element.
     */
    'align-content-xl-center'?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-between` class to the element.
     */
    'align-content-xl-between'?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-around` class to the element.
     */
    'align-content-xl-around'?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-stretch` class to the element.
     */
    'align-content-xl-stretch'?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-auto` class to the element.
     */
    'align-self-xl-auto'?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-start` class to the element.
     */
    'align-self-xl-start'?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-end` class to the element.
     */
    'align-self-xl-end'?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-center` class to the element.
     */
    'align-self-xl-center'?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-baseline` class to the element.
     */
    'align-self-xl-baseline'?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-stretch` class to the element.
     */
    'align-self-xl-stretch'?: boolean
    /**
     * Add Bootstrap's `.float-left` class to the element.
     */
    'float-left'?: boolean
    /**
     * Add Bootstrap's `.float-right` class to the element.
     */
    'float-right'?: boolean
    /**
     * Add Bootstrap's `.float-none` class to the element.
     */
    'float-none'?: boolean
    /**
     * Add Bootstrap's `.float-sm-left` class to the element.
     */
    'float-sm-left'?: boolean
    /**
     * Add Bootstrap's `.float-sm-right` class to the element.
     */
    'float-sm-right'?: boolean
    /**
     * Add Bootstrap's `.float-sm-none` class to the element.
     */
    'float-sm-none'?: boolean
    /**
     * Add Bootstrap's `.float-md-left` class to the element.
     */
    'float-md-left'?: boolean
    /**
     * Add Bootstrap's `.float-md-right` class to the element.
     */
    'float-md-right'?: boolean
    /**
     * Add Bootstrap's `.float-md-none` class to the element.
     */
    'float-md-none'?: boolean
    /**
     * Add Bootstrap's `.float-lg-left` class to the element.
     */
    'float-lg-left'?: boolean
    /**
     * Add Bootstrap's `.float-lg-right` class to the element.
     */
    'float-lg-right'?: boolean
    /**
     * Add Bootstrap's `.float-lg-none` class to the element.
     */
    'float-lg-none'?: boolean
    /**
     * Add Bootstrap's `.float-xl-left` class to the element.
     */
    'float-xl-left'?: boolean
    /**
     * Add Bootstrap's `.float-xl-right` class to the element.
     */
    'float-xl-right'?: boolean
    /**
     * Add Bootstrap's `.float-xl-none` class to the element.
     */
    'float-xl-none'?: boolean
    /**
     * Add Bootstrap's `.overflow-auto` class to the element.
     */
    'overflow-auto'?: boolean
    /**
     * Add Bootstrap's `.overflow-hidden` class to the element.
     */
    'overflow-hidden'?: boolean
    /**
     * Add Bootstrap's `.position-static` class to the element.
     */
    'position-static'?: boolean
    /**
     * Add Bootstrap's `.position-relative` class to the element.
     */
    'position-relative'?: boolean
    /**
     * Add Bootstrap's `.position-absolute` class to the element.
     */
    'position-absolute'?: boolean
    /**
     * Add Bootstrap's `.position-fixed` class to the element.
     */
    'position-fixed'?: boolean
    /**
     * Add Bootstrap's `.position-sticky` class to the element.
     */
    'position-sticky'?: boolean
    /**
     * Add Bootstrap's `.fixed-top` class to the element.
     */
    'fixed-top'?: boolean
    /**
     * Add Bootstrap's `.fixed-bottom` class to the element.
     */
    'fixed-bottom'?: boolean
    /**
     * Add Bootstrap's `.sticky-top` class to the element.
     */
    'sticky-top'?: boolean
    /**
     * Add Bootstrap's `.sr-only` class to the element.
     */
    'sr-only'?: boolean
    /**
     * Add Bootstrap's `.sr-only-focusable` class to the element.
     */
    'sr-only-focusable'?: boolean
    /**
     * Add Bootstrap's `.shadow-sm` class to the element.
     */
    'shadow-sm'?: boolean
    /**
     * Add Bootstrap's `.shadow` class to the element.
     */
    shadow?: boolean
    /**
     * Add Bootstrap's `.shadow-lg` class to the element.
     */
    'shadow-lg'?: boolean
    /**
     * Add Bootstrap's `.shadow-none` class to the element.
     */
    'shadow-none'?: boolean
    /**
     * Add Bootstrap's `.w-25` class to the element.
     */
    'w-25'?: boolean
    /**
     * Add Bootstrap's `.w-50` class to the element.
     */
    'w-50'?: boolean
    /**
     * Add Bootstrap's `.w-75` class to the element.
     */
    'w-75'?: boolean
    /**
     * Add Bootstrap's `.w-100` class to the element.
     */
    'w-100'?: boolean
    /**
     * Add Bootstrap's `.w-auto` class to the element.
     */
    'w-auto'?: boolean
    /**
     * Add Bootstrap's `.h-25` class to the element.
     */
    'h-25'?: boolean
    /**
     * Add Bootstrap's `.h-50` class to the element.
     */
    'h-50'?: boolean
    /**
     * Add Bootstrap's `.h-75` class to the element.
     */
    'h-75'?: boolean
    /**
     * Add Bootstrap's `.h-100` class to the element.
     */
    'h-100'?: boolean
    /**
     * Add Bootstrap's `.h-auto` class to the element.
     */
    'h-auto'?: boolean
    /**
     * Add Bootstrap's `.mw-100` class to the element.
     */
    'mw-100'?: boolean
    /**
     * Add Bootstrap's `.mh-100` class to the element.
     */
    'mh-100'?: boolean
    /**
     * Add Bootstrap's `.min-vw-100` class to the element.
     */
    'min-vw-100'?: boolean
    /**
     * Add Bootstrap's `.min-vh-100` class to the element.
     */
    'min-vh-100'?: boolean
    /**
     * Add Bootstrap's `.vw-100` class to the element.
     */
    'vw-100'?: boolean
    /**
     * Add Bootstrap's `.vh-100` class to the element.
     */
    'vh-100'?: boolean
    /**
     * Add Bootstrap's `.stretched-link` class to the element.
     */
    'stretched-link'?: boolean
    /**
     * Add Bootstrap's `.m-0` class to the element.
     */
    'm-0'?: boolean
    /**
     * Add Bootstrap's `.mt-0` class to the element.
     */
    'mt-0'?: boolean
    /**
     * Add Bootstrap's `.my-0` class to the element.
     */
    'my-0'?: boolean
    /**
     * Add Bootstrap's `.mr-0` class to the element.
     */
    'mr-0'?: boolean
    /**
     * Add Bootstrap's `.mx-0` class to the element.
     */
    'mx-0'?: boolean
    /**
     * Add Bootstrap's `.mb-0` class to the element.
     */
    'mb-0'?: boolean
    /**
     * Add Bootstrap's `.ml-0` class to the element.
     */
    'ml-0'?: boolean
    /**
     * Add Bootstrap's `.m-1` class to the element.
     */
    'm-1'?: boolean
    /**
     * Add Bootstrap's `.mt-1` class to the element.
     */
    'mt-1'?: boolean
    /**
     * Add Bootstrap's `.my-1` class to the element.
     */
    'my-1'?: boolean
    /**
     * Add Bootstrap's `.mr-1` class to the element.
     */
    'mr-1'?: boolean
    /**
     * Add Bootstrap's `.mx-1` class to the element.
     */
    'mx-1'?: boolean
    /**
     * Add Bootstrap's `.mb-1` class to the element.
     */
    'mb-1'?: boolean
    /**
     * Add Bootstrap's `.ml-1` class to the element.
     */
    'ml-1'?: boolean
    /**
     * Add Bootstrap's `.m-2` class to the element.
     */
    'm-2'?: boolean
    /**
     * Add Bootstrap's `.mt-2` class to the element.
     */
    'mt-2'?: boolean
    /**
     * Add Bootstrap's `.my-2` class to the element.
     */
    'my-2'?: boolean
    /**
     * Add Bootstrap's `.mr-2` class to the element.
     */
    'mr-2'?: boolean
    /**
     * Add Bootstrap's `.mx-2` class to the element.
     */
    'mx-2'?: boolean
    /**
     * Add Bootstrap's `.mb-2` class to the element.
     */
    'mb-2'?: boolean
    /**
     * Add Bootstrap's `.ml-2` class to the element.
     */
    'ml-2'?: boolean
    /**
     * Add Bootstrap's `.m-3` class to the element.
     */
    'm-3'?: boolean
    /**
     * Add Bootstrap's `.mt-3` class to the element.
     */
    'mt-3'?: boolean
    /**
     * Add Bootstrap's `.my-3` class to the element.
     */
    'my-3'?: boolean
    /**
     * Add Bootstrap's `.mr-3` class to the element.
     */
    'mr-3'?: boolean
    /**
     * Add Bootstrap's `.mx-3` class to the element.
     */
    'mx-3'?: boolean
    /**
     * Add Bootstrap's `.mb-3` class to the element.
     */
    'mb-3'?: boolean
    /**
     * Add Bootstrap's `.ml-3` class to the element.
     */
    'ml-3'?: boolean
    /**
     * Add Bootstrap's `.m-4` class to the element.
     */
    'm-4'?: boolean
    /**
     * Add Bootstrap's `.mt-4` class to the element.
     */
    'mt-4'?: boolean
    /**
     * Add Bootstrap's `.my-4` class to the element.
     */
    'my-4'?: boolean
    /**
     * Add Bootstrap's `.mr-4` class to the element.
     */
    'mr-4'?: boolean
    /**
     * Add Bootstrap's `.mx-4` class to the element.
     */
    'mx-4'?: boolean
    /**
     * Add Bootstrap's `.mb-4` class to the element.
     */
    'mb-4'?: boolean
    /**
     * Add Bootstrap's `.ml-4` class to the element.
     */
    'ml-4'?: boolean
    /**
     * Add Bootstrap's `.m-5` class to the element.
     */
    'm-5'?: boolean
    /**
     * Add Bootstrap's `.mt-5` class to the element.
     */
    'mt-5'?: boolean
    /**
     * Add Bootstrap's `.my-5` class to the element.
     */
    'my-5'?: boolean
    /**
     * Add Bootstrap's `.mr-5` class to the element.
     */
    'mr-5'?: boolean
    /**
     * Add Bootstrap's `.mx-5` class to the element.
     */
    'mx-5'?: boolean
    /**
     * Add Bootstrap's `.mb-5` class to the element.
     */
    'mb-5'?: boolean
    /**
     * Add Bootstrap's `.ml-5` class to the element.
     */
    'ml-5'?: boolean
    /**
     * Add Bootstrap's `.p-0` class to the element.
     */
    'p-0'?: boolean
    /**
     * Add Bootstrap's `.pt-0` class to the element.
     */
    'pt-0'?: boolean
    /**
     * Add Bootstrap's `.py-0` class to the element.
     */
    'py-0'?: boolean
    /**
     * Add Bootstrap's `.pr-0` class to the element.
     */
    'pr-0'?: boolean
    /**
     * Add Bootstrap's `.px-0` class to the element.
     */
    'px-0'?: boolean
    /**
     * Add Bootstrap's `.pb-0` class to the element.
     */
    'pb-0'?: boolean
    /**
     * Add Bootstrap's `.pl-0` class to the element.
     */
    'pl-0'?: boolean
    /**
     * Add Bootstrap's `.p-1` class to the element.
     */
    'p-1'?: boolean
    /**
     * Add Bootstrap's `.pt-1` class to the element.
     */
    'pt-1'?: boolean
    /**
     * Add Bootstrap's `.py-1` class to the element.
     */
    'py-1'?: boolean
    /**
     * Add Bootstrap's `.pr-1` class to the element.
     */
    'pr-1'?: boolean
    /**
     * Add Bootstrap's `.px-1` class to the element.
     */
    'px-1'?: boolean
    /**
     * Add Bootstrap's `.pb-1` class to the element.
     */
    'pb-1'?: boolean
    /**
     * Add Bootstrap's `.pl-1` class to the element.
     */
    'pl-1'?: boolean
    /**
     * Add Bootstrap's `.p-2` class to the element.
     */
    'p-2'?: boolean
    /**
     * Add Bootstrap's `.pt-2` class to the element.
     */
    'pt-2'?: boolean
    /**
     * Add Bootstrap's `.py-2` class to the element.
     */
    'py-2'?: boolean
    /**
     * Add Bootstrap's `.pr-2` class to the element.
     */
    'pr-2'?: boolean
    /**
     * Add Bootstrap's `.px-2` class to the element.
     */
    'px-2'?: boolean
    /**
     * Add Bootstrap's `.pb-2` class to the element.
     */
    'pb-2'?: boolean
    /**
     * Add Bootstrap's `.pl-2` class to the element.
     */
    'pl-2'?: boolean
    /**
     * Add Bootstrap's `.p-3` class to the element.
     */
    'p-3'?: boolean
    /**
     * Add Bootstrap's `.pt-3` class to the element.
     */
    'pt-3'?: boolean
    /**
     * Add Bootstrap's `.py-3` class to the element.
     */
    'py-3'?: boolean
    /**
     * Add Bootstrap's `.pr-3` class to the element.
     */
    'pr-3'?: boolean
    /**
     * Add Bootstrap's `.px-3` class to the element.
     */
    'px-3'?: boolean
    /**
     * Add Bootstrap's `.pb-3` class to the element.
     */
    'pb-3'?: boolean
    /**
     * Add Bootstrap's `.pl-3` class to the element.
     */
    'pl-3'?: boolean
    /**
     * Add Bootstrap's `.p-4` class to the element.
     */
    'p-4'?: boolean
    /**
     * Add Bootstrap's `.pt-4` class to the element.
     */
    'pt-4'?: boolean
    /**
     * Add Bootstrap's `.py-4` class to the element.
     */
    'py-4'?: boolean
    /**
     * Add Bootstrap's `.pr-4` class to the element.
     */
    'pr-4'?: boolean
    /**
     * Add Bootstrap's `.px-4` class to the element.
     */
    'px-4'?: boolean
    /**
     * Add Bootstrap's `.pb-4` class to the element.
     */
    'pb-4'?: boolean
    /**
     * Add Bootstrap's `.pl-4` class to the element.
     */
    'pl-4'?: boolean
    /**
     * Add Bootstrap's `.p-5` class to the element.
     */
    'p-5'?: boolean
    /**
     * Add Bootstrap's `.pt-5` class to the element.
     */
    'pt-5'?: boolean
    /**
     * Add Bootstrap's `.py-5` class to the element.
     */
    'py-5'?: boolean
    /**
     * Add Bootstrap's `.pr-5` class to the element.
     */
    'pr-5'?: boolean
    /**
     * Add Bootstrap's `.px-5` class to the element.
     */
    'px-5'?: boolean
    /**
     * Add Bootstrap's `.pb-5` class to the element.
     */
    'pb-5'?: boolean
    /**
     * Add Bootstrap's `.pl-5` class to the element.
     */
    'pl-5'?: boolean
    /**
     * Add Bootstrap's `.m-n1` class to the element.
     */
    'm-n1'?: boolean
    /**
     * Add Bootstrap's `.mt-n1` class to the element.
     */
    'mt-n1'?: boolean
    /**
     * Add Bootstrap's `.my-n1` class to the element.
     */
    'my-n1'?: boolean
    /**
     * Add Bootstrap's `.mr-n1` class to the element.
     */
    'mr-n1'?: boolean
    /**
     * Add Bootstrap's `.mx-n1` class to the element.
     */
    'mx-n1'?: boolean
    /**
     * Add Bootstrap's `.mb-n1` class to the element.
     */
    'mb-n1'?: boolean
    /**
     * Add Bootstrap's `.ml-n1` class to the element.
     */
    'ml-n1'?: boolean
    /**
     * Add Bootstrap's `.m-n2` class to the element.
     */
    'm-n2'?: boolean
    /**
     * Add Bootstrap's `.mt-n2` class to the element.
     */
    'mt-n2'?: boolean
    /**
     * Add Bootstrap's `.my-n2` class to the element.
     */
    'my-n2'?: boolean
    /**
     * Add Bootstrap's `.mr-n2` class to the element.
     */
    'mr-n2'?: boolean
    /**
     * Add Bootstrap's `.mx-n2` class to the element.
     */
    'mx-n2'?: boolean
    /**
     * Add Bootstrap's `.mb-n2` class to the element.
     */
    'mb-n2'?: boolean
    /**
     * Add Bootstrap's `.ml-n2` class to the element.
     */
    'ml-n2'?: boolean
    /**
     * Add Bootstrap's `.m-n3` class to the element.
     */
    'm-n3'?: boolean
    /**
     * Add Bootstrap's `.mt-n3` class to the element.
     */
    'mt-n3'?: boolean
    /**
     * Add Bootstrap's `.my-n3` class to the element.
     */
    'my-n3'?: boolean
    /**
     * Add Bootstrap's `.mr-n3` class to the element.
     */
    'mr-n3'?: boolean
    /**
     * Add Bootstrap's `.mx-n3` class to the element.
     */
    'mx-n3'?: boolean
    /**
     * Add Bootstrap's `.mb-n3` class to the element.
     */
    'mb-n3'?: boolean
    /**
     * Add Bootstrap's `.ml-n3` class to the element.
     */
    'ml-n3'?: boolean
    /**
     * Add Bootstrap's `.m-n4` class to the element.
     */
    'm-n4'?: boolean
    /**
     * Add Bootstrap's `.mt-n4` class to the element.
     */
    'mt-n4'?: boolean
    /**
     * Add Bootstrap's `.my-n4` class to the element.
     */
    'my-n4'?: boolean
    /**
     * Add Bootstrap's `.mr-n4` class to the element.
     */
    'mr-n4'?: boolean
    /**
     * Add Bootstrap's `.mx-n4` class to the element.
     */
    'mx-n4'?: boolean
    /**
     * Add Bootstrap's `.mb-n4` class to the element.
     */
    'mb-n4'?: boolean
    /**
     * Add Bootstrap's `.ml-n4` class to the element.
     */
    'ml-n4'?: boolean
    /**
     * Add Bootstrap's `.m-n5` class to the element.
     */
    'm-n5'?: boolean
    /**
     * Add Bootstrap's `.mt-n5` class to the element.
     */
    'mt-n5'?: boolean
    /**
     * Add Bootstrap's `.my-n5` class to the element.
     */
    'my-n5'?: boolean
    /**
     * Add Bootstrap's `.mr-n5` class to the element.
     */
    'mr-n5'?: boolean
    /**
     * Add Bootstrap's `.mx-n5` class to the element.
     */
    'mx-n5'?: boolean
    /**
     * Add Bootstrap's `.mb-n5` class to the element.
     */
    'mb-n5'?: boolean
    /**
     * Add Bootstrap's `.ml-n5` class to the element.
     */
    'ml-n5'?: boolean
    /**
     * Add Bootstrap's `.m-auto` class to the element.
     */
    'm-auto'?: boolean
    /**
     * Add Bootstrap's `.mt-auto` class to the element.
     */
    'mt-auto'?: boolean
    /**
     * Add Bootstrap's `.my-auto` class to the element.
     */
    'my-auto'?: boolean
    /**
     * Add Bootstrap's `.mr-auto` class to the element.
     */
    'mr-auto'?: boolean
    /**
     * Add Bootstrap's `.mx-auto` class to the element.
     */
    'mx-auto'?: boolean
    /**
     * Add Bootstrap's `.mb-auto` class to the element.
     */
    'mb-auto'?: boolean
    /**
     * Add Bootstrap's `.ml-auto` class to the element.
     */
    'ml-auto'?: boolean
    /**
     * Add Bootstrap's `.m-sm-0` class to the element.
     */
    'm-sm-0'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-0` class to the element.
     */
    'mt-sm-0'?: boolean
    /**
     * Add Bootstrap's `.my-sm-0` class to the element.
     */
    'my-sm-0'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-0` class to the element.
     */
    'mr-sm-0'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-0` class to the element.
     */
    'mx-sm-0'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-0` class to the element.
     */
    'mb-sm-0'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-0` class to the element.
     */
    'ml-sm-0'?: boolean
    /**
     * Add Bootstrap's `.m-sm-1` class to the element.
     */
    'm-sm-1'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-1` class to the element.
     */
    'mt-sm-1'?: boolean
    /**
     * Add Bootstrap's `.my-sm-1` class to the element.
     */
    'my-sm-1'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-1` class to the element.
     */
    'mr-sm-1'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-1` class to the element.
     */
    'mx-sm-1'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-1` class to the element.
     */
    'mb-sm-1'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-1` class to the element.
     */
    'ml-sm-1'?: boolean
    /**
     * Add Bootstrap's `.m-sm-2` class to the element.
     */
    'm-sm-2'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-2` class to the element.
     */
    'mt-sm-2'?: boolean
    /**
     * Add Bootstrap's `.my-sm-2` class to the element.
     */
    'my-sm-2'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-2` class to the element.
     */
    'mr-sm-2'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-2` class to the element.
     */
    'mx-sm-2'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-2` class to the element.
     */
    'mb-sm-2'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-2` class to the element.
     */
    'ml-sm-2'?: boolean
    /**
     * Add Bootstrap's `.m-sm-3` class to the element.
     */
    'm-sm-3'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-3` class to the element.
     */
    'mt-sm-3'?: boolean
    /**
     * Add Bootstrap's `.my-sm-3` class to the element.
     */
    'my-sm-3'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-3` class to the element.
     */
    'mr-sm-3'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-3` class to the element.
     */
    'mx-sm-3'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-3` class to the element.
     */
    'mb-sm-3'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-3` class to the element.
     */
    'ml-sm-3'?: boolean
    /**
     * Add Bootstrap's `.m-sm-4` class to the element.
     */
    'm-sm-4'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-4` class to the element.
     */
    'mt-sm-4'?: boolean
    /**
     * Add Bootstrap's `.my-sm-4` class to the element.
     */
    'my-sm-4'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-4` class to the element.
     */
    'mr-sm-4'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-4` class to the element.
     */
    'mx-sm-4'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-4` class to the element.
     */
    'mb-sm-4'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-4` class to the element.
     */
    'ml-sm-4'?: boolean
    /**
     * Add Bootstrap's `.m-sm-5` class to the element.
     */
    'm-sm-5'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-5` class to the element.
     */
    'mt-sm-5'?: boolean
    /**
     * Add Bootstrap's `.my-sm-5` class to the element.
     */
    'my-sm-5'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-5` class to the element.
     */
    'mr-sm-5'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-5` class to the element.
     */
    'mx-sm-5'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-5` class to the element.
     */
    'mb-sm-5'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-5` class to the element.
     */
    'ml-sm-5'?: boolean
    /**
     * Add Bootstrap's `.p-sm-0` class to the element.
     */
    'p-sm-0'?: boolean
    /**
     * Add Bootstrap's `.pt-sm-0` class to the element.
     */
    'pt-sm-0'?: boolean
    /**
     * Add Bootstrap's `.py-sm-0` class to the element.
     */
    'py-sm-0'?: boolean
    /**
     * Add Bootstrap's `.pr-sm-0` class to the element.
     */
    'pr-sm-0'?: boolean
    /**
     * Add Bootstrap's `.px-sm-0` class to the element.
     */
    'px-sm-0'?: boolean
    /**
     * Add Bootstrap's `.pb-sm-0` class to the element.
     */
    'pb-sm-0'?: boolean
    /**
     * Add Bootstrap's `.pl-sm-0` class to the element.
     */
    'pl-sm-0'?: boolean
    /**
     * Add Bootstrap's `.p-sm-1` class to the element.
     */
    'p-sm-1'?: boolean
    /**
     * Add Bootstrap's `.pt-sm-1` class to the element.
     */
    'pt-sm-1'?: boolean
    /**
     * Add Bootstrap's `.py-sm-1` class to the element.
     */
    'py-sm-1'?: boolean
    /**
     * Add Bootstrap's `.pr-sm-1` class to the element.
     */
    'pr-sm-1'?: boolean
    /**
     * Add Bootstrap's `.px-sm-1` class to the element.
     */
    'px-sm-1'?: boolean
    /**
     * Add Bootstrap's `.pb-sm-1` class to the element.
     */
    'pb-sm-1'?: boolean
    /**
     * Add Bootstrap's `.pl-sm-1` class to the element.
     */
    'pl-sm-1'?: boolean
    /**
     * Add Bootstrap's `.p-sm-2` class to the element.
     */
    'p-sm-2'?: boolean
    /**
     * Add Bootstrap's `.pt-sm-2` class to the element.
     */
    'pt-sm-2'?: boolean
    /**
     * Add Bootstrap's `.py-sm-2` class to the element.
     */
    'py-sm-2'?: boolean
    /**
     * Add Bootstrap's `.pr-sm-2` class to the element.
     */
    'pr-sm-2'?: boolean
    /**
     * Add Bootstrap's `.px-sm-2` class to the element.
     */
    'px-sm-2'?: boolean
    /**
     * Add Bootstrap's `.pb-sm-2` class to the element.
     */
    'pb-sm-2'?: boolean
    /**
     * Add Bootstrap's `.pl-sm-2` class to the element.
     */
    'pl-sm-2'?: boolean
    /**
     * Add Bootstrap's `.p-sm-3` class to the element.
     */
    'p-sm-3'?: boolean
    /**
     * Add Bootstrap's `.pt-sm-3` class to the element.
     */
    'pt-sm-3'?: boolean
    /**
     * Add Bootstrap's `.py-sm-3` class to the element.
     */
    'py-sm-3'?: boolean
    /**
     * Add Bootstrap's `.pr-sm-3` class to the element.
     */
    'pr-sm-3'?: boolean
    /**
     * Add Bootstrap's `.px-sm-3` class to the element.
     */
    'px-sm-3'?: boolean
    /**
     * Add Bootstrap's `.pb-sm-3` class to the element.
     */
    'pb-sm-3'?: boolean
    /**
     * Add Bootstrap's `.pl-sm-3` class to the element.
     */
    'pl-sm-3'?: boolean
    /**
     * Add Bootstrap's `.p-sm-4` class to the element.
     */
    'p-sm-4'?: boolean
    /**
     * Add Bootstrap's `.pt-sm-4` class to the element.
     */
    'pt-sm-4'?: boolean
    /**
     * Add Bootstrap's `.py-sm-4` class to the element.
     */
    'py-sm-4'?: boolean
    /**
     * Add Bootstrap's `.pr-sm-4` class to the element.
     */
    'pr-sm-4'?: boolean
    /**
     * Add Bootstrap's `.px-sm-4` class to the element.
     */
    'px-sm-4'?: boolean
    /**
     * Add Bootstrap's `.pb-sm-4` class to the element.
     */
    'pb-sm-4'?: boolean
    /**
     * Add Bootstrap's `.pl-sm-4` class to the element.
     */
    'pl-sm-4'?: boolean
    /**
     * Add Bootstrap's `.p-sm-5` class to the element.
     */
    'p-sm-5'?: boolean
    /**
     * Add Bootstrap's `.pt-sm-5` class to the element.
     */
    'pt-sm-5'?: boolean
    /**
     * Add Bootstrap's `.py-sm-5` class to the element.
     */
    'py-sm-5'?: boolean
    /**
     * Add Bootstrap's `.pr-sm-5` class to the element.
     */
    'pr-sm-5'?: boolean
    /**
     * Add Bootstrap's `.px-sm-5` class to the element.
     */
    'px-sm-5'?: boolean
    /**
     * Add Bootstrap's `.pb-sm-5` class to the element.
     */
    'pb-sm-5'?: boolean
    /**
     * Add Bootstrap's `.pl-sm-5` class to the element.
     */
    'pl-sm-5'?: boolean
    /**
     * Add Bootstrap's `.m-sm-n1` class to the element.
     */
    'm-sm-n1'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n1` class to the element.
     */
    'mt-sm-n1'?: boolean
    /**
     * Add Bootstrap's `.my-sm-n1` class to the element.
     */
    'my-sm-n1'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n1` class to the element.
     */
    'mr-sm-n1'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n1` class to the element.
     */
    'mx-sm-n1'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n1` class to the element.
     */
    'mb-sm-n1'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n1` class to the element.
     */
    'ml-sm-n1'?: boolean
    /**
     * Add Bootstrap's `.m-sm-n2` class to the element.
     */
    'm-sm-n2'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n2` class to the element.
     */
    'mt-sm-n2'?: boolean
    /**
     * Add Bootstrap's `.my-sm-n2` class to the element.
     */
    'my-sm-n2'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n2` class to the element.
     */
    'mr-sm-n2'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n2` class to the element.
     */
    'mx-sm-n2'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n2` class to the element.
     */
    'mb-sm-n2'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n2` class to the element.
     */
    'ml-sm-n2'?: boolean
    /**
     * Add Bootstrap's `.m-sm-n3` class to the element.
     */
    'm-sm-n3'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n3` class to the element.
     */
    'mt-sm-n3'?: boolean
    /**
     * Add Bootstrap's `.my-sm-n3` class to the element.
     */
    'my-sm-n3'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n3` class to the element.
     */
    'mr-sm-n3'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n3` class to the element.
     */
    'mx-sm-n3'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n3` class to the element.
     */
    'mb-sm-n3'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n3` class to the element.
     */
    'ml-sm-n3'?: boolean
    /**
     * Add Bootstrap's `.m-sm-n4` class to the element.
     */
    'm-sm-n4'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n4` class to the element.
     */
    'mt-sm-n4'?: boolean
    /**
     * Add Bootstrap's `.my-sm-n4` class to the element.
     */
    'my-sm-n4'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n4` class to the element.
     */
    'mr-sm-n4'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n4` class to the element.
     */
    'mx-sm-n4'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n4` class to the element.
     */
    'mb-sm-n4'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n4` class to the element.
     */
    'ml-sm-n4'?: boolean
    /**
     * Add Bootstrap's `.m-sm-n5` class to the element.
     */
    'm-sm-n5'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n5` class to the element.
     */
    'mt-sm-n5'?: boolean
    /**
     * Add Bootstrap's `.my-sm-n5` class to the element.
     */
    'my-sm-n5'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n5` class to the element.
     */
    'mr-sm-n5'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n5` class to the element.
     */
    'mx-sm-n5'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n5` class to the element.
     */
    'mb-sm-n5'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n5` class to the element.
     */
    'ml-sm-n5'?: boolean
    /**
     * Add Bootstrap's `.m-sm-auto` class to the element.
     */
    'm-sm-auto'?: boolean
    /**
     * Add Bootstrap's `.mt-sm-auto` class to the element.
     */
    'mt-sm-auto'?: boolean
    /**
     * Add Bootstrap's `.my-sm-auto` class to the element.
     */
    'my-sm-auto'?: boolean
    /**
     * Add Bootstrap's `.mr-sm-auto` class to the element.
     */
    'mr-sm-auto'?: boolean
    /**
     * Add Bootstrap's `.mx-sm-auto` class to the element.
     */
    'mx-sm-auto'?: boolean
    /**
     * Add Bootstrap's `.mb-sm-auto` class to the element.
     */
    'mb-sm-auto'?: boolean
    /**
     * Add Bootstrap's `.ml-sm-auto` class to the element.
     */
    'ml-sm-auto'?: boolean
    /**
     * Add Bootstrap's `.m-md-0` class to the element.
     */
    'm-md-0'?: boolean
    /**
     * Add Bootstrap's `.mt-md-0` class to the element.
     */
    'mt-md-0'?: boolean
    /**
     * Add Bootstrap's `.my-md-0` class to the element.
     */
    'my-md-0'?: boolean
    /**
     * Add Bootstrap's `.mr-md-0` class to the element.
     */
    'mr-md-0'?: boolean
    /**
     * Add Bootstrap's `.mx-md-0` class to the element.
     */
    'mx-md-0'?: boolean
    /**
     * Add Bootstrap's `.mb-md-0` class to the element.
     */
    'mb-md-0'?: boolean
    /**
     * Add Bootstrap's `.ml-md-0` class to the element.
     */
    'ml-md-0'?: boolean
    /**
     * Add Bootstrap's `.m-md-1` class to the element.
     */
    'm-md-1'?: boolean
    /**
     * Add Bootstrap's `.mt-md-1` class to the element.
     */
    'mt-md-1'?: boolean
    /**
     * Add Bootstrap's `.my-md-1` class to the element.
     */
    'my-md-1'?: boolean
    /**
     * Add Bootstrap's `.mr-md-1` class to the element.
     */
    'mr-md-1'?: boolean
    /**
     * Add Bootstrap's `.mx-md-1` class to the element.
     */
    'mx-md-1'?: boolean
    /**
     * Add Bootstrap's `.mb-md-1` class to the element.
     */
    'mb-md-1'?: boolean
    /**
     * Add Bootstrap's `.ml-md-1` class to the element.
     */
    'ml-md-1'?: boolean
    /**
     * Add Bootstrap's `.m-md-2` class to the element.
     */
    'm-md-2'?: boolean
    /**
     * Add Bootstrap's `.mt-md-2` class to the element.
     */
    'mt-md-2'?: boolean
    /**
     * Add Bootstrap's `.my-md-2` class to the element.
     */
    'my-md-2'?: boolean
    /**
     * Add Bootstrap's `.mr-md-2` class to the element.
     */
    'mr-md-2'?: boolean
    /**
     * Add Bootstrap's `.mx-md-2` class to the element.
     */
    'mx-md-2'?: boolean
    /**
     * Add Bootstrap's `.mb-md-2` class to the element.
     */
    'mb-md-2'?: boolean
    /**
     * Add Bootstrap's `.ml-md-2` class to the element.
     */
    'ml-md-2'?: boolean
    /**
     * Add Bootstrap's `.m-md-3` class to the element.
     */
    'm-md-3'?: boolean
    /**
     * Add Bootstrap's `.mt-md-3` class to the element.
     */
    'mt-md-3'?: boolean
    /**
     * Add Bootstrap's `.my-md-3` class to the element.
     */
    'my-md-3'?: boolean
    /**
     * Add Bootstrap's `.mr-md-3` class to the element.
     */
    'mr-md-3'?: boolean
    /**
     * Add Bootstrap's `.mx-md-3` class to the element.
     */
    'mx-md-3'?: boolean
    /**
     * Add Bootstrap's `.mb-md-3` class to the element.
     */
    'mb-md-3'?: boolean
    /**
     * Add Bootstrap's `.ml-md-3` class to the element.
     */
    'ml-md-3'?: boolean
    /**
     * Add Bootstrap's `.m-md-4` class to the element.
     */
    'm-md-4'?: boolean
    /**
     * Add Bootstrap's `.mt-md-4` class to the element.
     */
    'mt-md-4'?: boolean
    /**
     * Add Bootstrap's `.my-md-4` class to the element.
     */
    'my-md-4'?: boolean
    /**
     * Add Bootstrap's `.mr-md-4` class to the element.
     */
    'mr-md-4'?: boolean
    /**
     * Add Bootstrap's `.mx-md-4` class to the element.
     */
    'mx-md-4'?: boolean
    /**
     * Add Bootstrap's `.mb-md-4` class to the element.
     */
    'mb-md-4'?: boolean
    /**
     * Add Bootstrap's `.ml-md-4` class to the element.
     */
    'ml-md-4'?: boolean
    /**
     * Add Bootstrap's `.m-md-5` class to the element.
     */
    'm-md-5'?: boolean
    /**
     * Add Bootstrap's `.mt-md-5` class to the element.
     */
    'mt-md-5'?: boolean
    /**
     * Add Bootstrap's `.my-md-5` class to the element.
     */
    'my-md-5'?: boolean
    /**
     * Add Bootstrap's `.mr-md-5` class to the element.
     */
    'mr-md-5'?: boolean
    /**
     * Add Bootstrap's `.mx-md-5` class to the element.
     */
    'mx-md-5'?: boolean
    /**
     * Add Bootstrap's `.mb-md-5` class to the element.
     */
    'mb-md-5'?: boolean
    /**
     * Add Bootstrap's `.ml-md-5` class to the element.
     */
    'ml-md-5'?: boolean
    /**
     * Add Bootstrap's `.p-md-0` class to the element.
     */
    'p-md-0'?: boolean
    /**
     * Add Bootstrap's `.pt-md-0` class to the element.
     */
    'pt-md-0'?: boolean
    /**
     * Add Bootstrap's `.py-md-0` class to the element.
     */
    'py-md-0'?: boolean
    /**
     * Add Bootstrap's `.pr-md-0` class to the element.
     */
    'pr-md-0'?: boolean
    /**
     * Add Bootstrap's `.px-md-0` class to the element.
     */
    'px-md-0'?: boolean
    /**
     * Add Bootstrap's `.pb-md-0` class to the element.
     */
    'pb-md-0'?: boolean
    /**
     * Add Bootstrap's `.pl-md-0` class to the element.
     */
    'pl-md-0'?: boolean
    /**
     * Add Bootstrap's `.p-md-1` class to the element.
     */
    'p-md-1'?: boolean
    /**
     * Add Bootstrap's `.pt-md-1` class to the element.
     */
    'pt-md-1'?: boolean
    /**
     * Add Bootstrap's `.py-md-1` class to the element.
     */
    'py-md-1'?: boolean
    /**
     * Add Bootstrap's `.pr-md-1` class to the element.
     */
    'pr-md-1'?: boolean
    /**
     * Add Bootstrap's `.px-md-1` class to the element.
     */
    'px-md-1'?: boolean
    /**
     * Add Bootstrap's `.pb-md-1` class to the element.
     */
    'pb-md-1'?: boolean
    /**
     * Add Bootstrap's `.pl-md-1` class to the element.
     */
    'pl-md-1'?: boolean
    /**
     * Add Bootstrap's `.p-md-2` class to the element.
     */
    'p-md-2'?: boolean
    /**
     * Add Bootstrap's `.pt-md-2` class to the element.
     */
    'pt-md-2'?: boolean
    /**
     * Add Bootstrap's `.py-md-2` class to the element.
     */
    'py-md-2'?: boolean
    /**
     * Add Bootstrap's `.pr-md-2` class to the element.
     */
    'pr-md-2'?: boolean
    /**
     * Add Bootstrap's `.px-md-2` class to the element.
     */
    'px-md-2'?: boolean
    /**
     * Add Bootstrap's `.pb-md-2` class to the element.
     */
    'pb-md-2'?: boolean
    /**
     * Add Bootstrap's `.pl-md-2` class to the element.
     */
    'pl-md-2'?: boolean
    /**
     * Add Bootstrap's `.p-md-3` class to the element.
     */
    'p-md-3'?: boolean
    /**
     * Add Bootstrap's `.pt-md-3` class to the element.
     */
    'pt-md-3'?: boolean
    /**
     * Add Bootstrap's `.py-md-3` class to the element.
     */
    'py-md-3'?: boolean
    /**
     * Add Bootstrap's `.pr-md-3` class to the element.
     */
    'pr-md-3'?: boolean
    /**
     * Add Bootstrap's `.px-md-3` class to the element.
     */
    'px-md-3'?: boolean
    /**
     * Add Bootstrap's `.pb-md-3` class to the element.
     */
    'pb-md-3'?: boolean
    /**
     * Add Bootstrap's `.pl-md-3` class to the element.
     */
    'pl-md-3'?: boolean
    /**
     * Add Bootstrap's `.p-md-4` class to the element.
     */
    'p-md-4'?: boolean
    /**
     * Add Bootstrap's `.pt-md-4` class to the element.
     */
    'pt-md-4'?: boolean
    /**
     * Add Bootstrap's `.py-md-4` class to the element.
     */
    'py-md-4'?: boolean
    /**
     * Add Bootstrap's `.pr-md-4` class to the element.
     */
    'pr-md-4'?: boolean
    /**
     * Add Bootstrap's `.px-md-4` class to the element.
     */
    'px-md-4'?: boolean
    /**
     * Add Bootstrap's `.pb-md-4` class to the element.
     */
    'pb-md-4'?: boolean
    /**
     * Add Bootstrap's `.pl-md-4` class to the element.
     */
    'pl-md-4'?: boolean
    /**
     * Add Bootstrap's `.p-md-5` class to the element.
     */
    'p-md-5'?: boolean
    /**
     * Add Bootstrap's `.pt-md-5` class to the element.
     */
    'pt-md-5'?: boolean
    /**
     * Add Bootstrap's `.py-md-5` class to the element.
     */
    'py-md-5'?: boolean
    /**
     * Add Bootstrap's `.pr-md-5` class to the element.
     */
    'pr-md-5'?: boolean
    /**
     * Add Bootstrap's `.px-md-5` class to the element.
     */
    'px-md-5'?: boolean
    /**
     * Add Bootstrap's `.pb-md-5` class to the element.
     */
    'pb-md-5'?: boolean
    /**
     * Add Bootstrap's `.pl-md-5` class to the element.
     */
    'pl-md-5'?: boolean
    /**
     * Add Bootstrap's `.m-md-n1` class to the element.
     */
    'm-md-n1'?: boolean
    /**
     * Add Bootstrap's `.mt-md-n1` class to the element.
     */
    'mt-md-n1'?: boolean
    /**
     * Add Bootstrap's `.my-md-n1` class to the element.
     */
    'my-md-n1'?: boolean
    /**
     * Add Bootstrap's `.mr-md-n1` class to the element.
     */
    'mr-md-n1'?: boolean
    /**
     * Add Bootstrap's `.mx-md-n1` class to the element.
     */
    'mx-md-n1'?: boolean
    /**
     * Add Bootstrap's `.mb-md-n1` class to the element.
     */
    'mb-md-n1'?: boolean
    /**
     * Add Bootstrap's `.ml-md-n1` class to the element.
     */
    'ml-md-n1'?: boolean
    /**
     * Add Bootstrap's `.m-md-n2` class to the element.
     */
    'm-md-n2'?: boolean
    /**
     * Add Bootstrap's `.mt-md-n2` class to the element.
     */
    'mt-md-n2'?: boolean
    /**
     * Add Bootstrap's `.my-md-n2` class to the element.
     */
    'my-md-n2'?: boolean
    /**
     * Add Bootstrap's `.mr-md-n2` class to the element.
     */
    'mr-md-n2'?: boolean
    /**
     * Add Bootstrap's `.mx-md-n2` class to the element.
     */
    'mx-md-n2'?: boolean
    /**
     * Add Bootstrap's `.mb-md-n2` class to the element.
     */
    'mb-md-n2'?: boolean
    /**
     * Add Bootstrap's `.ml-md-n2` class to the element.
     */
    'ml-md-n2'?: boolean
    /**
     * Add Bootstrap's `.m-md-n3` class to the element.
     */
    'm-md-n3'?: boolean
    /**
     * Add Bootstrap's `.mt-md-n3` class to the element.
     */
    'mt-md-n3'?: boolean
    /**
     * Add Bootstrap's `.my-md-n3` class to the element.
     */
    'my-md-n3'?: boolean
    /**
     * Add Bootstrap's `.mr-md-n3` class to the element.
     */
    'mr-md-n3'?: boolean
    /**
     * Add Bootstrap's `.mx-md-n3` class to the element.
     */
    'mx-md-n3'?: boolean
    /**
     * Add Bootstrap's `.mb-md-n3` class to the element.
     */
    'mb-md-n3'?: boolean
    /**
     * Add Bootstrap's `.ml-md-n3` class to the element.
     */
    'ml-md-n3'?: boolean
    /**
     * Add Bootstrap's `.m-md-n4` class to the element.
     */
    'm-md-n4'?: boolean
    /**
     * Add Bootstrap's `.mt-md-n4` class to the element.
     */
    'mt-md-n4'?: boolean
    /**
     * Add Bootstrap's `.my-md-n4` class to the element.
     */
    'my-md-n4'?: boolean
    /**
     * Add Bootstrap's `.mr-md-n4` class to the element.
     */
    'mr-md-n4'?: boolean
    /**
     * Add Bootstrap's `.mx-md-n4` class to the element.
     */
    'mx-md-n4'?: boolean
    /**
     * Add Bootstrap's `.mb-md-n4` class to the element.
     */
    'mb-md-n4'?: boolean
    /**
     * Add Bootstrap's `.ml-md-n4` class to the element.
     */
    'ml-md-n4'?: boolean
    /**
     * Add Bootstrap's `.m-md-n5` class to the element.
     */
    'm-md-n5'?: boolean
    /**
     * Add Bootstrap's `.mt-md-n5` class to the element.
     */
    'mt-md-n5'?: boolean
    /**
     * Add Bootstrap's `.my-md-n5` class to the element.
     */
    'my-md-n5'?: boolean
    /**
     * Add Bootstrap's `.mr-md-n5` class to the element.
     */
    'mr-md-n5'?: boolean
    /**
     * Add Bootstrap's `.mx-md-n5` class to the element.
     */
    'mx-md-n5'?: boolean
    /**
     * Add Bootstrap's `.mb-md-n5` class to the element.
     */
    'mb-md-n5'?: boolean
    /**
     * Add Bootstrap's `.ml-md-n5` class to the element.
     */
    'ml-md-n5'?: boolean
    /**
     * Add Bootstrap's `.m-md-auto` class to the element.
     */
    'm-md-auto'?: boolean
    /**
     * Add Bootstrap's `.mt-md-auto` class to the element.
     */
    'mt-md-auto'?: boolean
    /**
     * Add Bootstrap's `.my-md-auto` class to the element.
     */
    'my-md-auto'?: boolean
    /**
     * Add Bootstrap's `.mr-md-auto` class to the element.
     */
    'mr-md-auto'?: boolean
    /**
     * Add Bootstrap's `.mx-md-auto` class to the element.
     */
    'mx-md-auto'?: boolean
    /**
     * Add Bootstrap's `.mb-md-auto` class to the element.
     */
    'mb-md-auto'?: boolean
    /**
     * Add Bootstrap's `.ml-md-auto` class to the element.
     */
    'ml-md-auto'?: boolean
    /**
     * Add Bootstrap's `.m-lg-0` class to the element.
     */
    'm-lg-0'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-0` class to the element.
     */
    'mt-lg-0'?: boolean
    /**
     * Add Bootstrap's `.my-lg-0` class to the element.
     */
    'my-lg-0'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-0` class to the element.
     */
    'mr-lg-0'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-0` class to the element.
     */
    'mx-lg-0'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-0` class to the element.
     */
    'mb-lg-0'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-0` class to the element.
     */
    'ml-lg-0'?: boolean
    /**
     * Add Bootstrap's `.m-lg-1` class to the element.
     */
    'm-lg-1'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-1` class to the element.
     */
    'mt-lg-1'?: boolean
    /**
     * Add Bootstrap's `.my-lg-1` class to the element.
     */
    'my-lg-1'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-1` class to the element.
     */
    'mr-lg-1'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-1` class to the element.
     */
    'mx-lg-1'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-1` class to the element.
     */
    'mb-lg-1'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-1` class to the element.
     */
    'ml-lg-1'?: boolean
    /**
     * Add Bootstrap's `.m-lg-2` class to the element.
     */
    'm-lg-2'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-2` class to the element.
     */
    'mt-lg-2'?: boolean
    /**
     * Add Bootstrap's `.my-lg-2` class to the element.
     */
    'my-lg-2'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-2` class to the element.
     */
    'mr-lg-2'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-2` class to the element.
     */
    'mx-lg-2'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-2` class to the element.
     */
    'mb-lg-2'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-2` class to the element.
     */
    'ml-lg-2'?: boolean
    /**
     * Add Bootstrap's `.m-lg-3` class to the element.
     */
    'm-lg-3'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-3` class to the element.
     */
    'mt-lg-3'?: boolean
    /**
     * Add Bootstrap's `.my-lg-3` class to the element.
     */
    'my-lg-3'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-3` class to the element.
     */
    'mr-lg-3'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-3` class to the element.
     */
    'mx-lg-3'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-3` class to the element.
     */
    'mb-lg-3'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-3` class to the element.
     */
    'ml-lg-3'?: boolean
    /**
     * Add Bootstrap's `.m-lg-4` class to the element.
     */
    'm-lg-4'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-4` class to the element.
     */
    'mt-lg-4'?: boolean
    /**
     * Add Bootstrap's `.my-lg-4` class to the element.
     */
    'my-lg-4'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-4` class to the element.
     */
    'mr-lg-4'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-4` class to the element.
     */
    'mx-lg-4'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-4` class to the element.
     */
    'mb-lg-4'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-4` class to the element.
     */
    'ml-lg-4'?: boolean
    /**
     * Add Bootstrap's `.m-lg-5` class to the element.
     */
    'm-lg-5'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-5` class to the element.
     */
    'mt-lg-5'?: boolean
    /**
     * Add Bootstrap's `.my-lg-5` class to the element.
     */
    'my-lg-5'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-5` class to the element.
     */
    'mr-lg-5'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-5` class to the element.
     */
    'mx-lg-5'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-5` class to the element.
     */
    'mb-lg-5'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-5` class to the element.
     */
    'ml-lg-5'?: boolean
    /**
     * Add Bootstrap's `.p-lg-0` class to the element.
     */
    'p-lg-0'?: boolean
    /**
     * Add Bootstrap's `.pt-lg-0` class to the element.
     */
    'pt-lg-0'?: boolean
    /**
     * Add Bootstrap's `.py-lg-0` class to the element.
     */
    'py-lg-0'?: boolean
    /**
     * Add Bootstrap's `.pr-lg-0` class to the element.
     */
    'pr-lg-0'?: boolean
    /**
     * Add Bootstrap's `.px-lg-0` class to the element.
     */
    'px-lg-0'?: boolean
    /**
     * Add Bootstrap's `.pb-lg-0` class to the element.
     */
    'pb-lg-0'?: boolean
    /**
     * Add Bootstrap's `.pl-lg-0` class to the element.
     */
    'pl-lg-0'?: boolean
    /**
     * Add Bootstrap's `.p-lg-1` class to the element.
     */
    'p-lg-1'?: boolean
    /**
     * Add Bootstrap's `.pt-lg-1` class to the element.
     */
    'pt-lg-1'?: boolean
    /**
     * Add Bootstrap's `.py-lg-1` class to the element.
     */
    'py-lg-1'?: boolean
    /**
     * Add Bootstrap's `.pr-lg-1` class to the element.
     */
    'pr-lg-1'?: boolean
    /**
     * Add Bootstrap's `.px-lg-1` class to the element.
     */
    'px-lg-1'?: boolean
    /**
     * Add Bootstrap's `.pb-lg-1` class to the element.
     */
    'pb-lg-1'?: boolean
    /**
     * Add Bootstrap's `.pl-lg-1` class to the element.
     */
    'pl-lg-1'?: boolean
    /**
     * Add Bootstrap's `.p-lg-2` class to the element.
     */
    'p-lg-2'?: boolean
    /**
     * Add Bootstrap's `.pt-lg-2` class to the element.
     */
    'pt-lg-2'?: boolean
    /**
     * Add Bootstrap's `.py-lg-2` class to the element.
     */
    'py-lg-2'?: boolean
    /**
     * Add Bootstrap's `.pr-lg-2` class to the element.
     */
    'pr-lg-2'?: boolean
    /**
     * Add Bootstrap's `.px-lg-2` class to the element.
     */
    'px-lg-2'?: boolean
    /**
     * Add Bootstrap's `.pb-lg-2` class to the element.
     */
    'pb-lg-2'?: boolean
    /**
     * Add Bootstrap's `.pl-lg-2` class to the element.
     */
    'pl-lg-2'?: boolean
    /**
     * Add Bootstrap's `.p-lg-3` class to the element.
     */
    'p-lg-3'?: boolean
    /**
     * Add Bootstrap's `.pt-lg-3` class to the element.
     */
    'pt-lg-3'?: boolean
    /**
     * Add Bootstrap's `.py-lg-3` class to the element.
     */
    'py-lg-3'?: boolean
    /**
     * Add Bootstrap's `.pr-lg-3` class to the element.
     */
    'pr-lg-3'?: boolean
    /**
     * Add Bootstrap's `.px-lg-3` class to the element.
     */
    'px-lg-3'?: boolean
    /**
     * Add Bootstrap's `.pb-lg-3` class to the element.
     */
    'pb-lg-3'?: boolean
    /**
     * Add Bootstrap's `.pl-lg-3` class to the element.
     */
    'pl-lg-3'?: boolean
    /**
     * Add Bootstrap's `.p-lg-4` class to the element.
     */
    'p-lg-4'?: boolean
    /**
     * Add Bootstrap's `.pt-lg-4` class to the element.
     */
    'pt-lg-4'?: boolean
    /**
     * Add Bootstrap's `.py-lg-4` class to the element.
     */
    'py-lg-4'?: boolean
    /**
     * Add Bootstrap's `.pr-lg-4` class to the element.
     */
    'pr-lg-4'?: boolean
    /**
     * Add Bootstrap's `.px-lg-4` class to the element.
     */
    'px-lg-4'?: boolean
    /**
     * Add Bootstrap's `.pb-lg-4` class to the element.
     */
    'pb-lg-4'?: boolean
    /**
     * Add Bootstrap's `.pl-lg-4` class to the element.
     */
    'pl-lg-4'?: boolean
    /**
     * Add Bootstrap's `.p-lg-5` class to the element.
     */
    'p-lg-5'?: boolean
    /**
     * Add Bootstrap's `.pt-lg-5` class to the element.
     */
    'pt-lg-5'?: boolean
    /**
     * Add Bootstrap's `.py-lg-5` class to the element.
     */
    'py-lg-5'?: boolean
    /**
     * Add Bootstrap's `.pr-lg-5` class to the element.
     */
    'pr-lg-5'?: boolean
    /**
     * Add Bootstrap's `.px-lg-5` class to the element.
     */
    'px-lg-5'?: boolean
    /**
     * Add Bootstrap's `.pb-lg-5` class to the element.
     */
    'pb-lg-5'?: boolean
    /**
     * Add Bootstrap's `.pl-lg-5` class to the element.
     */
    'pl-lg-5'?: boolean
    /**
     * Add Bootstrap's `.m-lg-n1` class to the element.
     */
    'm-lg-n1'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n1` class to the element.
     */
    'mt-lg-n1'?: boolean
    /**
     * Add Bootstrap's `.my-lg-n1` class to the element.
     */
    'my-lg-n1'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n1` class to the element.
     */
    'mr-lg-n1'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n1` class to the element.
     */
    'mx-lg-n1'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n1` class to the element.
     */
    'mb-lg-n1'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n1` class to the element.
     */
    'ml-lg-n1'?: boolean
    /**
     * Add Bootstrap's `.m-lg-n2` class to the element.
     */
    'm-lg-n2'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n2` class to the element.
     */
    'mt-lg-n2'?: boolean
    /**
     * Add Bootstrap's `.my-lg-n2` class to the element.
     */
    'my-lg-n2'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n2` class to the element.
     */
    'mr-lg-n2'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n2` class to the element.
     */
    'mx-lg-n2'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n2` class to the element.
     */
    'mb-lg-n2'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n2` class to the element.
     */
    'ml-lg-n2'?: boolean
    /**
     * Add Bootstrap's `.m-lg-n3` class to the element.
     */
    'm-lg-n3'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n3` class to the element.
     */
    'mt-lg-n3'?: boolean
    /**
     * Add Bootstrap's `.my-lg-n3` class to the element.
     */
    'my-lg-n3'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n3` class to the element.
     */
    'mr-lg-n3'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n3` class to the element.
     */
    'mx-lg-n3'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n3` class to the element.
     */
    'mb-lg-n3'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n3` class to the element.
     */
    'ml-lg-n3'?: boolean
    /**
     * Add Bootstrap's `.m-lg-n4` class to the element.
     */
    'm-lg-n4'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n4` class to the element.
     */
    'mt-lg-n4'?: boolean
    /**
     * Add Bootstrap's `.my-lg-n4` class to the element.
     */
    'my-lg-n4'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n4` class to the element.
     */
    'mr-lg-n4'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n4` class to the element.
     */
    'mx-lg-n4'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n4` class to the element.
     */
    'mb-lg-n4'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n4` class to the element.
     */
    'ml-lg-n4'?: boolean
    /**
     * Add Bootstrap's `.m-lg-n5` class to the element.
     */
    'm-lg-n5'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n5` class to the element.
     */
    'mt-lg-n5'?: boolean
    /**
     * Add Bootstrap's `.my-lg-n5` class to the element.
     */
    'my-lg-n5'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n5` class to the element.
     */
    'mr-lg-n5'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n5` class to the element.
     */
    'mx-lg-n5'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n5` class to the element.
     */
    'mb-lg-n5'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n5` class to the element.
     */
    'ml-lg-n5'?: boolean
    /**
     * Add Bootstrap's `.m-lg-auto` class to the element.
     */
    'm-lg-auto'?: boolean
    /**
     * Add Bootstrap's `.mt-lg-auto` class to the element.
     */
    'mt-lg-auto'?: boolean
    /**
     * Add Bootstrap's `.my-lg-auto` class to the element.
     */
    'my-lg-auto'?: boolean
    /**
     * Add Bootstrap's `.mr-lg-auto` class to the element.
     */
    'mr-lg-auto'?: boolean
    /**
     * Add Bootstrap's `.mx-lg-auto` class to the element.
     */
    'mx-lg-auto'?: boolean
    /**
     * Add Bootstrap's `.mb-lg-auto` class to the element.
     */
    'mb-lg-auto'?: boolean
    /**
     * Add Bootstrap's `.ml-lg-auto` class to the element.
     */
    'ml-lg-auto'?: boolean
    /**
     * Add Bootstrap's `.m-xl-0` class to the element.
     */
    'm-xl-0'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-0` class to the element.
     */
    'mt-xl-0'?: boolean
    /**
     * Add Bootstrap's `.my-xl-0` class to the element.
     */
    'my-xl-0'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-0` class to the element.
     */
    'mr-xl-0'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-0` class to the element.
     */
    'mx-xl-0'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-0` class to the element.
     */
    'mb-xl-0'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-0` class to the element.
     */
    'ml-xl-0'?: boolean
    /**
     * Add Bootstrap's `.m-xl-1` class to the element.
     */
    'm-xl-1'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-1` class to the element.
     */
    'mt-xl-1'?: boolean
    /**
     * Add Bootstrap's `.my-xl-1` class to the element.
     */
    'my-xl-1'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-1` class to the element.
     */
    'mr-xl-1'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-1` class to the element.
     */
    'mx-xl-1'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-1` class to the element.
     */
    'mb-xl-1'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-1` class to the element.
     */
    'ml-xl-1'?: boolean
    /**
     * Add Bootstrap's `.m-xl-2` class to the element.
     */
    'm-xl-2'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-2` class to the element.
     */
    'mt-xl-2'?: boolean
    /**
     * Add Bootstrap's `.my-xl-2` class to the element.
     */
    'my-xl-2'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-2` class to the element.
     */
    'mr-xl-2'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-2` class to the element.
     */
    'mx-xl-2'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-2` class to the element.
     */
    'mb-xl-2'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-2` class to the element.
     */
    'ml-xl-2'?: boolean
    /**
     * Add Bootstrap's `.m-xl-3` class to the element.
     */
    'm-xl-3'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-3` class to the element.
     */
    'mt-xl-3'?: boolean
    /**
     * Add Bootstrap's `.my-xl-3` class to the element.
     */
    'my-xl-3'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-3` class to the element.
     */
    'mr-xl-3'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-3` class to the element.
     */
    'mx-xl-3'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-3` class to the element.
     */
    'mb-xl-3'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-3` class to the element.
     */
    'ml-xl-3'?: boolean
    /**
     * Add Bootstrap's `.m-xl-4` class to the element.
     */
    'm-xl-4'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-4` class to the element.
     */
    'mt-xl-4'?: boolean
    /**
     * Add Bootstrap's `.my-xl-4` class to the element.
     */
    'my-xl-4'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-4` class to the element.
     */
    'mr-xl-4'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-4` class to the element.
     */
    'mx-xl-4'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-4` class to the element.
     */
    'mb-xl-4'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-4` class to the element.
     */
    'ml-xl-4'?: boolean
    /**
     * Add Bootstrap's `.m-xl-5` class to the element.
     */
    'm-xl-5'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-5` class to the element.
     */
    'mt-xl-5'?: boolean
    /**
     * Add Bootstrap's `.my-xl-5` class to the element.
     */
    'my-xl-5'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-5` class to the element.
     */
    'mr-xl-5'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-5` class to the element.
     */
    'mx-xl-5'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-5` class to the element.
     */
    'mb-xl-5'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-5` class to the element.
     */
    'ml-xl-5'?: boolean
    /**
     * Add Bootstrap's `.p-xl-0` class to the element.
     */
    'p-xl-0'?: boolean
    /**
     * Add Bootstrap's `.pt-xl-0` class to the element.
     */
    'pt-xl-0'?: boolean
    /**
     * Add Bootstrap's `.py-xl-0` class to the element.
     */
    'py-xl-0'?: boolean
    /**
     * Add Bootstrap's `.pr-xl-0` class to the element.
     */
    'pr-xl-0'?: boolean
    /**
     * Add Bootstrap's `.px-xl-0` class to the element.
     */
    'px-xl-0'?: boolean
    /**
     * Add Bootstrap's `.pb-xl-0` class to the element.
     */
    'pb-xl-0'?: boolean
    /**
     * Add Bootstrap's `.pl-xl-0` class to the element.
     */
    'pl-xl-0'?: boolean
    /**
     * Add Bootstrap's `.p-xl-1` class to the element.
     */
    'p-xl-1'?: boolean
    /**
     * Add Bootstrap's `.pt-xl-1` class to the element.
     */
    'pt-xl-1'?: boolean
    /**
     * Add Bootstrap's `.py-xl-1` class to the element.
     */
    'py-xl-1'?: boolean
    /**
     * Add Bootstrap's `.pr-xl-1` class to the element.
     */
    'pr-xl-1'?: boolean
    /**
     * Add Bootstrap's `.px-xl-1` class to the element.
     */
    'px-xl-1'?: boolean
    /**
     * Add Bootstrap's `.pb-xl-1` class to the element.
     */
    'pb-xl-1'?: boolean
    /**
     * Add Bootstrap's `.pl-xl-1` class to the element.
     */
    'pl-xl-1'?: boolean
    /**
     * Add Bootstrap's `.p-xl-2` class to the element.
     */
    'p-xl-2'?: boolean
    /**
     * Add Bootstrap's `.pt-xl-2` class to the element.
     */
    'pt-xl-2'?: boolean
    /**
     * Add Bootstrap's `.py-xl-2` class to the element.
     */
    'py-xl-2'?: boolean
    /**
     * Add Bootstrap's `.pr-xl-2` class to the element.
     */
    'pr-xl-2'?: boolean
    /**
     * Add Bootstrap's `.px-xl-2` class to the element.
     */
    'px-xl-2'?: boolean
    /**
     * Add Bootstrap's `.pb-xl-2` class to the element.
     */
    'pb-xl-2'?: boolean
    /**
     * Add Bootstrap's `.pl-xl-2` class to the element.
     */
    'pl-xl-2'?: boolean
    /**
     * Add Bootstrap's `.p-xl-3` class to the element.
     */
    'p-xl-3'?: boolean
    /**
     * Add Bootstrap's `.pt-xl-3` class to the element.
     */
    'pt-xl-3'?: boolean
    /**
     * Add Bootstrap's `.py-xl-3` class to the element.
     */
    'py-xl-3'?: boolean
    /**
     * Add Bootstrap's `.pr-xl-3` class to the element.
     */
    'pr-xl-3'?: boolean
    /**
     * Add Bootstrap's `.px-xl-3` class to the element.
     */
    'px-xl-3'?: boolean
    /**
     * Add Bootstrap's `.pb-xl-3` class to the element.
     */
    'pb-xl-3'?: boolean
    /**
     * Add Bootstrap's `.pl-xl-3` class to the element.
     */
    'pl-xl-3'?: boolean
    /**
     * Add Bootstrap's `.p-xl-4` class to the element.
     */
    'p-xl-4'?: boolean
    /**
     * Add Bootstrap's `.pt-xl-4` class to the element.
     */
    'pt-xl-4'?: boolean
    /**
     * Add Bootstrap's `.py-xl-4` class to the element.
     */
    'py-xl-4'?: boolean
    /**
     * Add Bootstrap's `.pr-xl-4` class to the element.
     */
    'pr-xl-4'?: boolean
    /**
     * Add Bootstrap's `.px-xl-4` class to the element.
     */
    'px-xl-4'?: boolean
    /**
     * Add Bootstrap's `.pb-xl-4` class to the element.
     */
    'pb-xl-4'?: boolean
    /**
     * Add Bootstrap's `.pl-xl-4` class to the element.
     */
    'pl-xl-4'?: boolean
    /**
     * Add Bootstrap's `.p-xl-5` class to the element.
     */
    'p-xl-5'?: boolean
    /**
     * Add Bootstrap's `.pt-xl-5` class to the element.
     */
    'pt-xl-5'?: boolean
    /**
     * Add Bootstrap's `.py-xl-5` class to the element.
     */
    'py-xl-5'?: boolean
    /**
     * Add Bootstrap's `.pr-xl-5` class to the element.
     */
    'pr-xl-5'?: boolean
    /**
     * Add Bootstrap's `.px-xl-5` class to the element.
     */
    'px-xl-5'?: boolean
    /**
     * Add Bootstrap's `.pb-xl-5` class to the element.
     */
    'pb-xl-5'?: boolean
    /**
     * Add Bootstrap's `.pl-xl-5` class to the element.
     */
    'pl-xl-5'?: boolean
    /**
     * Add Bootstrap's `.m-xl-n1` class to the element.
     */
    'm-xl-n1'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n1` class to the element.
     */
    'mt-xl-n1'?: boolean
    /**
     * Add Bootstrap's `.my-xl-n1` class to the element.
     */
    'my-xl-n1'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n1` class to the element.
     */
    'mr-xl-n1'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n1` class to the element.
     */
    'mx-xl-n1'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n1` class to the element.
     */
    'mb-xl-n1'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n1` class to the element.
     */
    'ml-xl-n1'?: boolean
    /**
     * Add Bootstrap's `.m-xl-n2` class to the element.
     */
    'm-xl-n2'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n2` class to the element.
     */
    'mt-xl-n2'?: boolean
    /**
     * Add Bootstrap's `.my-xl-n2` class to the element.
     */
    'my-xl-n2'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n2` class to the element.
     */
    'mr-xl-n2'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n2` class to the element.
     */
    'mx-xl-n2'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n2` class to the element.
     */
    'mb-xl-n2'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n2` class to the element.
     */
    'ml-xl-n2'?: boolean
    /**
     * Add Bootstrap's `.m-xl-n3` class to the element.
     */
    'm-xl-n3'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n3` class to the element.
     */
    'mt-xl-n3'?: boolean
    /**
     * Add Bootstrap's `.my-xl-n3` class to the element.
     */
    'my-xl-n3'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n3` class to the element.
     */
    'mr-xl-n3'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n3` class to the element.
     */
    'mx-xl-n3'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n3` class to the element.
     */
    'mb-xl-n3'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n3` class to the element.
     */
    'ml-xl-n3'?: boolean
    /**
     * Add Bootstrap's `.m-xl-n4` class to the element.
     */
    'm-xl-n4'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n4` class to the element.
     */
    'mt-xl-n4'?: boolean
    /**
     * Add Bootstrap's `.my-xl-n4` class to the element.
     */
    'my-xl-n4'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n4` class to the element.
     */
    'mr-xl-n4'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n4` class to the element.
     */
    'mx-xl-n4'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n4` class to the element.
     */
    'mb-xl-n4'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n4` class to the element.
     */
    'ml-xl-n4'?: boolean
    /**
     * Add Bootstrap's `.m-xl-n5` class to the element.
     */
    'm-xl-n5'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n5` class to the element.
     */
    'mt-xl-n5'?: boolean
    /**
     * Add Bootstrap's `.my-xl-n5` class to the element.
     */
    'my-xl-n5'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n5` class to the element.
     */
    'mr-xl-n5'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n5` class to the element.
     */
    'mx-xl-n5'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n5` class to the element.
     */
    'mb-xl-n5'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n5` class to the element.
     */
    'ml-xl-n5'?: boolean
    /**
     * Add Bootstrap's `.m-xl-auto` class to the element.
     */
    'm-xl-auto'?: boolean
    /**
     * Add Bootstrap's `.mt-xl-auto` class to the element.
     */
    'mt-xl-auto'?: boolean
    /**
     * Add Bootstrap's `.my-xl-auto` class to the element.
     */
    'my-xl-auto'?: boolean
    /**
     * Add Bootstrap's `.mr-xl-auto` class to the element.
     */
    'mr-xl-auto'?: boolean
    /**
     * Add Bootstrap's `.mx-xl-auto` class to the element.
     */
    'mx-xl-auto'?: boolean
    /**
     * Add Bootstrap's `.mb-xl-auto` class to the element.
     */
    'mb-xl-auto'?: boolean
    /**
     * Add Bootstrap's `.ml-xl-auto` class to the element.
     */
    'ml-xl-auto'?: boolean
    /**
     * Add Bootstrap's `.text-monospace` class to the element.
     */
    'text-monospace'?: boolean
    /**
     * Add Bootstrap's `.text-justify` class to the element.
     */
    'text-justify'?: boolean
    /**
     * Add Bootstrap's `.text-wrap` class to the element.
     */
    'text-wrap'?: boolean
    /**
     * Add Bootstrap's `.text-nowrap` class to the element.
     */
    'text-nowrap'?: boolean
    /**
     * Add Bootstrap's `.text-truncate` class to the element.
     */
    'text-truncate'?: boolean
    /**
     * Add Bootstrap's `.text-left` class to the element.
     */
    'text-left'?: boolean
    /**
     * Add Bootstrap's `.text-right` class to the element.
     */
    'text-right'?: boolean
    /**
     * Add Bootstrap's `.text-center` class to the element.
     */
    'text-center'?: boolean
    /**
     * Add Bootstrap's `.text-sm-left` class to the element.
     */
    'text-sm-left'?: boolean
    /**
     * Add Bootstrap's `.text-sm-right` class to the element.
     */
    'text-sm-right'?: boolean
    /**
     * Add Bootstrap's `.text-sm-center` class to the element.
     */
    'text-sm-center'?: boolean
    /**
     * Add Bootstrap's `.text-md-left` class to the element.
     */
    'text-md-left'?: boolean
    /**
     * Add Bootstrap's `.text-md-right` class to the element.
     */
    'text-md-right'?: boolean
    /**
     * Add Bootstrap's `.text-md-center` class to the element.
     */
    'text-md-center'?: boolean
    /**
     * Add Bootstrap's `.text-lg-left` class to the element.
     */
    'text-lg-left'?: boolean
    /**
     * Add Bootstrap's `.text-lg-right` class to the element.
     */
    'text-lg-right'?: boolean
    /**
     * Add Bootstrap's `.text-lg-center` class to the element.
     */
    'text-lg-center'?: boolean
    /**
     * Add Bootstrap's `.text-xl-left` class to the element.
     */
    'text-xl-left'?: boolean
    /**
     * Add Bootstrap's `.text-xl-right` class to the element.
     */
    'text-xl-right'?: boolean
    /**
     * Add Bootstrap's `.text-xl-center` class to the element.
     */
    'text-xl-center'?: boolean
    /**
     * Add Bootstrap's `.text-lowercase` class to the element.
     */
    'text-lowercase'?: boolean
    /**
     * Add Bootstrap's `.text-uppercase` class to the element.
     */
    'text-uppercase'?: boolean
    /**
     * Add Bootstrap's `.text-capitalize` class to the element.
     */
    'text-capitalize'?: boolean
    /**
     * Add Bootstrap's `.font-weight-light` class to the element.
     */
    'font-weight-light'?: boolean
    /**
     * Add Bootstrap's `.font-weight-lighter` class to the element.
     */
    'font-weight-lighter'?: boolean
    /**
     * Add Bootstrap's `.font-weight-normal` class to the element.
     */
    'font-weight-normal'?: boolean
    /**
     * Add Bootstrap's `.font-weight-bold` class to the element.
     */
    'font-weight-bold'?: boolean
    /**
     * Add Bootstrap's `.font-weight-bolder` class to the element.
     */
    'font-weight-bolder'?: boolean
    /**
     * Add Bootstrap's `.font-italic` class to the element.
     */
    'font-italic'?: boolean
    /**
     * Add Bootstrap's `.text-white` class to the element.
     */
    'text-white'?: boolean
    /**
     * Add Bootstrap's `.text-primary` class to the element.
     */
    'text-primary'?: boolean
    /**
     * Add Bootstrap's `.text-secondary` class to the element.
     */
    'text-secondary'?: boolean
    /**
     * Add Bootstrap's `.text-success` class to the element.
     */
    'text-success'?: boolean
    /**
     * Add Bootstrap's `.text-info` class to the element.
     */
    'text-info'?: boolean
    /**
     * Add Bootstrap's `.text-warning` class to the element.
     */
    'text-warning'?: boolean
    /**
     * Add Bootstrap's `.text-danger` class to the element.
     */
    'text-danger'?: boolean
    /**
     * Add Bootstrap's `.text-light` class to the element.
     */
    'text-light'?: boolean
    /**
     * Add Bootstrap's `.text-dark` class to the element.
     */
    'text-dark'?: boolean
    /**
     * Add Bootstrap's `.text-body` class to the element.
     */
    'text-body'?: boolean
    /**
     * Add Bootstrap's `.text-muted` class to the element.
     */
    'text-muted'?: boolean
    /**
     * Add Bootstrap's `.text-black-50` class to the element.
     */
    'text-black-50'?: boolean
    /**
     * Add Bootstrap's `.text-white-50` class to the element.
     */
    'text-white-50'?: boolean
    /**
     * Add Bootstrap's `.text-hide` class to the element.
     */
    'text-hide'?: boolean
    /**
     * Add Bootstrap's `.text-decoration-none` class to the element.
     */
    'text-decoration-none'?: boolean
    /**
     * Add Bootstrap's `.text-break` class to the element.
     */
    'text-break'?: boolean
    /**
     * Add Bootstrap's `.text-reset` class to the element.
     */
    'text-reset'?: boolean
    /**
     * Add Bootstrap's `.visible` class to the element.
     */
    visible?: boolean
    /**
     * Add Bootstrap's `.invisible` class to the element.
     */
    invisible?: boolean
    /**
     * Add Bootstrap's `.display-1` class to the element. Alias for `display-1` prop.
     */
    display1?: boolean
    /**
     * Add Bootstrap's `.display-2` class to the element. Alias for `display-2` prop.
     */
    display2?: boolean
    /**
     * Add Bootstrap's `.display-3` class to the element. Alias for `display-3` prop.
     */
    display3?: boolean
    /**
     * Add Bootstrap's `.display-4` class to the element. Alias for `display-4` prop.
     */
    display4?: boolean
    /**
     * Add Bootstrap's `.list-unstyled` class to the element. Alias for `list-unstyled` prop.
     */
    listUnstyled?: boolean
    /**
     * Add Bootstrap's `.list-inline` class to the element. Alias for `list-inline` prop.
     */
    listInline?: boolean
    /**
     * Add Bootstrap's `.list-inline-item` class to the element. Alias for `list-inline-item` prop.
     */
    listInlineItem?: boolean
    /**
     * Add Bootstrap's `.blockquote-footer` class to the element. Alias for `blockquote-footer` prop.
     */
    blockquoteFooter?: boolean
    /**
     * Add Bootstrap's `.img-fluid` class to the element. Alias for `img-fluid` prop.
     */
    imgFluid?: boolean
    /**
     * Add Bootstrap's `.img-thumbnail` class to the element. Alias for `img-thumbnail` prop.
     */
    imgThumbnail?: boolean
    /**
     * Add Bootstrap's `.figure-img` class to the element. Alias for `figure-img` prop.
     */
    figureImg?: boolean
    /**
     * Add Bootstrap's `.figure-caption` class to the element. Alias for `figure-caption` prop.
     */
    figureCaption?: boolean
    /**
     * Add Bootstrap's `.pre-scrollable` class to the element. Alias for `pre-scrollable` prop.
     */
    preScrollable?: boolean
    /**
     * Add Bootstrap's `.container-fluid` class to the element. Alias for `container-fluid` prop.
     */
    containerFluid?: boolean
    /**
     * Add Bootstrap's `.container-sm` class to the element. Alias for `container-sm` prop.
     */
    containerSm?: boolean
    /**
     * Add Bootstrap's `.container-md` class to the element. Alias for `container-md` prop.
     */
    containerMd?: boolean
    /**
     * Add Bootstrap's `.container-lg` class to the element. Alias for `container-lg` prop.
     */
    containerLg?: boolean
    /**
     * Add Bootstrap's `.container-xl` class to the element. Alias for `container-xl` prop.
     */
    containerXl?: boolean
    /**
     * Add Bootstrap's `.no-gutters` class to the element. Alias for `no-gutters` prop.
     */
    noGutters?: boolean
    /**
     * Add Bootstrap's `.col-1` class to the element. Alias for `col-1` prop.
     */
    col1?: boolean
    /**
     * Add Bootstrap's `.col-2` class to the element. Alias for `col-2` prop.
     */
    col2?: boolean
    /**
     * Add Bootstrap's `.col-3` class to the element. Alias for `col-3` prop.
     */
    col3?: boolean
    /**
     * Add Bootstrap's `.col-4` class to the element. Alias for `col-4` prop.
     */
    col4?: boolean
    /**
     * Add Bootstrap's `.col-5` class to the element. Alias for `col-5` prop.
     */
    col5?: boolean
    /**
     * Add Bootstrap's `.col-6` class to the element. Alias for `col-6` prop.
     */
    col6?: boolean
    /**
     * Add Bootstrap's `.col-7` class to the element. Alias for `col-7` prop.
     */
    col7?: boolean
    /**
     * Add Bootstrap's `.col-8` class to the element. Alias for `col-8` prop.
     */
    col8?: boolean
    /**
     * Add Bootstrap's `.col-9` class to the element. Alias for `col-9` prop.
     */
    col9?: boolean
    /**
     * Add Bootstrap's `.col-10` class to the element. Alias for `col-10` prop.
     */
    col10?: boolean
    /**
     * Add Bootstrap's `.col-11` class to the element. Alias for `col-11` prop.
     */
    col11?: boolean
    /**
     * Add Bootstrap's `.col-12` class to the element. Alias for `col-12` prop.
     */
    col12?: boolean
    /**
     * Add Bootstrap's `.col-auto` class to the element. Alias for `col-auto` prop.
     */
    colAuto?: boolean
    /**
     * Add Bootstrap's `.col-sm-1` class to the element. Alias for `col-sm-1` prop.
     */
    colSm1?: boolean
    /**
     * Add Bootstrap's `.col-sm-2` class to the element. Alias for `col-sm-2` prop.
     */
    colSm2?: boolean
    /**
     * Add Bootstrap's `.col-sm-3` class to the element. Alias for `col-sm-3` prop.
     */
    colSm3?: boolean
    /**
     * Add Bootstrap's `.col-sm-4` class to the element. Alias for `col-sm-4` prop.
     */
    colSm4?: boolean
    /**
     * Add Bootstrap's `.col-sm-5` class to the element. Alias for `col-sm-5` prop.
     */
    colSm5?: boolean
    /**
     * Add Bootstrap's `.col-sm-6` class to the element. Alias for `col-sm-6` prop.
     */
    colSm6?: boolean
    /**
     * Add Bootstrap's `.col-sm-7` class to the element. Alias for `col-sm-7` prop.
     */
    colSm7?: boolean
    /**
     * Add Bootstrap's `.col-sm-8` class to the element. Alias for `col-sm-8` prop.
     */
    colSm8?: boolean
    /**
     * Add Bootstrap's `.col-sm-9` class to the element. Alias for `col-sm-9` prop.
     */
    colSm9?: boolean
    /**
     * Add Bootstrap's `.col-sm-10` class to the element. Alias for `col-sm-10` prop.
     */
    colSm10?: boolean
    /**
     * Add Bootstrap's `.col-sm-11` class to the element. Alias for `col-sm-11` prop.
     */
    colSm11?: boolean
    /**
     * Add Bootstrap's `.col-sm-12` class to the element. Alias for `col-sm-12` prop.
     */
    colSm12?: boolean
    /**
     * Add Bootstrap's `.col-sm` class to the element. Alias for `col-sm` prop.
     */
    colSm?: boolean
    /**
     * Add Bootstrap's `.col-sm-auto` class to the element. Alias for `col-sm-auto` prop.
     */
    colSmAuto?: boolean
    /**
     * Add Bootstrap's `.col-md-1` class to the element. Alias for `col-md-1` prop.
     */
    colMd1?: boolean
    /**
     * Add Bootstrap's `.col-md-2` class to the element. Alias for `col-md-2` prop.
     */
    colMd2?: boolean
    /**
     * Add Bootstrap's `.col-md-3` class to the element. Alias for `col-md-3` prop.
     */
    colMd3?: boolean
    /**
     * Add Bootstrap's `.col-md-4` class to the element. Alias for `col-md-4` prop.
     */
    colMd4?: boolean
    /**
     * Add Bootstrap's `.col-md-5` class to the element. Alias for `col-md-5` prop.
     */
    colMd5?: boolean
    /**
     * Add Bootstrap's `.col-md-6` class to the element. Alias for `col-md-6` prop.
     */
    colMd6?: boolean
    /**
     * Add Bootstrap's `.col-md-7` class to the element. Alias for `col-md-7` prop.
     */
    colMd7?: boolean
    /**
     * Add Bootstrap's `.col-md-8` class to the element. Alias for `col-md-8` prop.
     */
    colMd8?: boolean
    /**
     * Add Bootstrap's `.col-md-9` class to the element. Alias for `col-md-9` prop.
     */
    colMd9?: boolean
    /**
     * Add Bootstrap's `.col-md-10` class to the element. Alias for `col-md-10` prop.
     */
    colMd10?: boolean
    /**
     * Add Bootstrap's `.col-md-11` class to the element. Alias for `col-md-11` prop.
     */
    colMd11?: boolean
    /**
     * Add Bootstrap's `.col-md-12` class to the element. Alias for `col-md-12` prop.
     */
    colMd12?: boolean
    /**
     * Add Bootstrap's `.col-md` class to the element. Alias for `col-md` prop.
     */
    colMd?: boolean
    /**
     * Add Bootstrap's `.col-md-auto` class to the element. Alias for `col-md-auto` prop.
     */
    colMdAuto?: boolean
    /**
     * Add Bootstrap's `.col-lg-1` class to the element. Alias for `col-lg-1` prop.
     */
    colLg1?: boolean
    /**
     * Add Bootstrap's `.col-lg-2` class to the element. Alias for `col-lg-2` prop.
     */
    colLg2?: boolean
    /**
     * Add Bootstrap's `.col-lg-3` class to the element. Alias for `col-lg-3` prop.
     */
    colLg3?: boolean
    /**
     * Add Bootstrap's `.col-lg-4` class to the element. Alias for `col-lg-4` prop.
     */
    colLg4?: boolean
    /**
     * Add Bootstrap's `.col-lg-5` class to the element. Alias for `col-lg-5` prop.
     */
    colLg5?: boolean
    /**
     * Add Bootstrap's `.col-lg-6` class to the element. Alias for `col-lg-6` prop.
     */
    colLg6?: boolean
    /**
     * Add Bootstrap's `.col-lg-7` class to the element. Alias for `col-lg-7` prop.
     */
    colLg7?: boolean
    /**
     * Add Bootstrap's `.col-lg-8` class to the element. Alias for `col-lg-8` prop.
     */
    colLg8?: boolean
    /**
     * Add Bootstrap's `.col-lg-9` class to the element. Alias for `col-lg-9` prop.
     */
    colLg9?: boolean
    /**
     * Add Bootstrap's `.col-lg-10` class to the element. Alias for `col-lg-10` prop.
     */
    colLg10?: boolean
    /**
     * Add Bootstrap's `.col-lg-11` class to the element. Alias for `col-lg-11` prop.
     */
    colLg11?: boolean
    /**
     * Add Bootstrap's `.col-lg-12` class to the element. Alias for `col-lg-12` prop.
     */
    colLg12?: boolean
    /**
     * Add Bootstrap's `.col-lg` class to the element. Alias for `col-lg` prop.
     */
    colLg?: boolean
    /**
     * Add Bootstrap's `.col-lg-auto` class to the element. Alias for `col-lg-auto` prop.
     */
    colLgAuto?: boolean
    /**
     * Add Bootstrap's `.col-xl-1` class to the element. Alias for `col-xl-1` prop.
     */
    colXl1?: boolean
    /**
     * Add Bootstrap's `.col-xl-2` class to the element. Alias for `col-xl-2` prop.
     */
    colXl2?: boolean
    /**
     * Add Bootstrap's `.col-xl-3` class to the element. Alias for `col-xl-3` prop.
     */
    colXl3?: boolean
    /**
     * Add Bootstrap's `.col-xl-4` class to the element. Alias for `col-xl-4` prop.
     */
    colXl4?: boolean
    /**
     * Add Bootstrap's `.col-xl-5` class to the element. Alias for `col-xl-5` prop.
     */
    colXl5?: boolean
    /**
     * Add Bootstrap's `.col-xl-6` class to the element. Alias for `col-xl-6` prop.
     */
    colXl6?: boolean
    /**
     * Add Bootstrap's `.col-xl-7` class to the element. Alias for `col-xl-7` prop.
     */
    colXl7?: boolean
    /**
     * Add Bootstrap's `.col-xl-8` class to the element. Alias for `col-xl-8` prop.
     */
    colXl8?: boolean
    /**
     * Add Bootstrap's `.col-xl-9` class to the element. Alias for `col-xl-9` prop.
     */
    colXl9?: boolean
    /**
     * Add Bootstrap's `.col-xl-10` class to the element. Alias for `col-xl-10` prop.
     */
    colXl10?: boolean
    /**
     * Add Bootstrap's `.col-xl-11` class to the element. Alias for `col-xl-11` prop.
     */
    colXl11?: boolean
    /**
     * Add Bootstrap's `.col-xl-12` class to the element. Alias for `col-xl-12` prop.
     */
    colXl12?: boolean
    /**
     * Add Bootstrap's `.col-xl` class to the element. Alias for `col-xl` prop.
     */
    colXl?: boolean
    /**
     * Add Bootstrap's `.col-xl-auto` class to the element. Alias for `col-xl-auto` prop.
     */
    colXlAuto?: boolean
    /**
     * Add Bootstrap's `.row-cols-1` class to the element. Alias for `row-cols-1` prop.
     */
    rowCols1?: boolean
    /**
     * Add Bootstrap's `.row-cols-2` class to the element. Alias for `row-cols-2` prop.
     */
    rowCols2?: boolean
    /**
     * Add Bootstrap's `.row-cols-3` class to the element. Alias for `row-cols-3` prop.
     */
    rowCols3?: boolean
    /**
     * Add Bootstrap's `.row-cols-4` class to the element. Alias for `row-cols-4` prop.
     */
    rowCols4?: boolean
    /**
     * Add Bootstrap's `.row-cols-5` class to the element. Alias for `row-cols-5` prop.
     */
    rowCols5?: boolean
    /**
     * Add Bootstrap's `.row-cols-6` class to the element. Alias for `row-cols-6` prop.
     */
    rowCols6?: boolean
    /**
     * Add Bootstrap's `.order-first` class to the element. Alias for `order-first` prop.
     */
    orderFirst?: boolean
    /**
     * Add Bootstrap's `.order-last` class to the element. Alias for `order-last` prop.
     */
    orderLast?: boolean
    /**
     * Add Bootstrap's `.order-0` class to the element. Alias for `order-0` prop.
     */
    order0?: boolean
    /**
     * Add Bootstrap's `.order-1` class to the element. Alias for `order-1` prop.
     */
    order1?: boolean
    /**
     * Add Bootstrap's `.order-2` class to the element. Alias for `order-2` prop.
     */
    order2?: boolean
    /**
     * Add Bootstrap's `.order-3` class to the element. Alias for `order-3` prop.
     */
    order3?: boolean
    /**
     * Add Bootstrap's `.order-4` class to the element. Alias for `order-4` prop.
     */
    order4?: boolean
    /**
     * Add Bootstrap's `.order-5` class to the element. Alias for `order-5` prop.
     */
    order5?: boolean
    /**
     * Add Bootstrap's `.order-6` class to the element. Alias for `order-6` prop.
     */
    order6?: boolean
    /**
     * Add Bootstrap's `.order-7` class to the element. Alias for `order-7` prop.
     */
    order7?: boolean
    /**
     * Add Bootstrap's `.order-8` class to the element. Alias for `order-8` prop.
     */
    order8?: boolean
    /**
     * Add Bootstrap's `.order-9` class to the element. Alias for `order-9` prop.
     */
    order9?: boolean
    /**
     * Add Bootstrap's `.order-10` class to the element. Alias for `order-10` prop.
     */
    order10?: boolean
    /**
     * Add Bootstrap's `.order-11` class to the element. Alias for `order-11` prop.
     */
    order11?: boolean
    /**
     * Add Bootstrap's `.order-12` class to the element. Alias for `order-12` prop.
     */
    order12?: boolean
    /**
     * Add Bootstrap's `.offset-1` class to the element. Alias for `offset-1` prop.
     */
    offset1?: boolean
    /**
     * Add Bootstrap's `.offset-2` class to the element. Alias for `offset-2` prop.
     */
    offset2?: boolean
    /**
     * Add Bootstrap's `.offset-3` class to the element. Alias for `offset-3` prop.
     */
    offset3?: boolean
    /**
     * Add Bootstrap's `.offset-4` class to the element. Alias for `offset-4` prop.
     */
    offset4?: boolean
    /**
     * Add Bootstrap's `.offset-5` class to the element. Alias for `offset-5` prop.
     */
    offset5?: boolean
    /**
     * Add Bootstrap's `.offset-6` class to the element. Alias for `offset-6` prop.
     */
    offset6?: boolean
    /**
     * Add Bootstrap's `.offset-7` class to the element. Alias for `offset-7` prop.
     */
    offset7?: boolean
    /**
     * Add Bootstrap's `.offset-8` class to the element. Alias for `offset-8` prop.
     */
    offset8?: boolean
    /**
     * Add Bootstrap's `.offset-9` class to the element. Alias for `offset-9` prop.
     */
    offset9?: boolean
    /**
     * Add Bootstrap's `.offset-10` class to the element. Alias for `offset-10` prop.
     */
    offset10?: boolean
    /**
     * Add Bootstrap's `.offset-11` class to the element. Alias for `offset-11` prop.
     */
    offset11?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-1` class to the element. Alias for `row-cols-sm-1` prop.
     */
    rowColsSm1?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-2` class to the element. Alias for `row-cols-sm-2` prop.
     */
    rowColsSm2?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-3` class to the element. Alias for `row-cols-sm-3` prop.
     */
    rowColsSm3?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-4` class to the element. Alias for `row-cols-sm-4` prop.
     */
    rowColsSm4?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-5` class to the element. Alias for `row-cols-sm-5` prop.
     */
    rowColsSm5?: boolean
    /**
     * Add Bootstrap's `.row-cols-sm-6` class to the element. Alias for `row-cols-sm-6` prop.
     */
    rowColsSm6?: boolean
    /**
     * Add Bootstrap's `.order-sm-first` class to the element. Alias for `order-sm-first` prop.
     */
    orderSmFirst?: boolean
    /**
     * Add Bootstrap's `.order-sm-last` class to the element. Alias for `order-sm-last` prop.
     */
    orderSmLast?: boolean
    /**
     * Add Bootstrap's `.order-sm-0` class to the element. Alias for `order-sm-0` prop.
     */
    orderSm0?: boolean
    /**
     * Add Bootstrap's `.order-sm-1` class to the element. Alias for `order-sm-1` prop.
     */
    orderSm1?: boolean
    /**
     * Add Bootstrap's `.order-sm-2` class to the element. Alias for `order-sm-2` prop.
     */
    orderSm2?: boolean
    /**
     * Add Bootstrap's `.order-sm-3` class to the element. Alias for `order-sm-3` prop.
     */
    orderSm3?: boolean
    /**
     * Add Bootstrap's `.order-sm-4` class to the element. Alias for `order-sm-4` prop.
     */
    orderSm4?: boolean
    /**
     * Add Bootstrap's `.order-sm-5` class to the element. Alias for `order-sm-5` prop.
     */
    orderSm5?: boolean
    /**
     * Add Bootstrap's `.order-sm-6` class to the element. Alias for `order-sm-6` prop.
     */
    orderSm6?: boolean
    /**
     * Add Bootstrap's `.order-sm-7` class to the element. Alias for `order-sm-7` prop.
     */
    orderSm7?: boolean
    /**
     * Add Bootstrap's `.order-sm-8` class to the element. Alias for `order-sm-8` prop.
     */
    orderSm8?: boolean
    /**
     * Add Bootstrap's `.order-sm-9` class to the element. Alias for `order-sm-9` prop.
     */
    orderSm9?: boolean
    /**
     * Add Bootstrap's `.order-sm-10` class to the element. Alias for `order-sm-10` prop.
     */
    orderSm10?: boolean
    /**
     * Add Bootstrap's `.order-sm-11` class to the element. Alias for `order-sm-11` prop.
     */
    orderSm11?: boolean
    /**
     * Add Bootstrap's `.order-sm-12` class to the element. Alias for `order-sm-12` prop.
     */
    orderSm12?: boolean
    /**
     * Add Bootstrap's `.offset-sm-0` class to the element. Alias for `offset-sm-0` prop.
     */
    offsetSm0?: boolean
    /**
     * Add Bootstrap's `.offset-sm-1` class to the element. Alias for `offset-sm-1` prop.
     */
    offsetSm1?: boolean
    /**
     * Add Bootstrap's `.offset-sm-2` class to the element. Alias for `offset-sm-2` prop.
     */
    offsetSm2?: boolean
    /**
     * Add Bootstrap's `.offset-sm-3` class to the element. Alias for `offset-sm-3` prop.
     */
    offsetSm3?: boolean
    /**
     * Add Bootstrap's `.offset-sm-4` class to the element. Alias for `offset-sm-4` prop.
     */
    offsetSm4?: boolean
    /**
     * Add Bootstrap's `.offset-sm-5` class to the element. Alias for `offset-sm-5` prop.
     */
    offsetSm5?: boolean
    /**
     * Add Bootstrap's `.offset-sm-6` class to the element. Alias for `offset-sm-6` prop.
     */
    offsetSm6?: boolean
    /**
     * Add Bootstrap's `.offset-sm-7` class to the element. Alias for `offset-sm-7` prop.
     */
    offsetSm7?: boolean
    /**
     * Add Bootstrap's `.offset-sm-8` class to the element. Alias for `offset-sm-8` prop.
     */
    offsetSm8?: boolean
    /**
     * Add Bootstrap's `.offset-sm-9` class to the element. Alias for `offset-sm-9` prop.
     */
    offsetSm9?: boolean
    /**
     * Add Bootstrap's `.offset-sm-10` class to the element. Alias for `offset-sm-10` prop.
     */
    offsetSm10?: boolean
    /**
     * Add Bootstrap's `.offset-sm-11` class to the element. Alias for `offset-sm-11` prop.
     */
    offsetSm11?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-1` class to the element. Alias for `row-cols-md-1` prop.
     */
    rowColsMd1?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-2` class to the element. Alias for `row-cols-md-2` prop.
     */
    rowColsMd2?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-3` class to the element. Alias for `row-cols-md-3` prop.
     */
    rowColsMd3?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-4` class to the element. Alias for `row-cols-md-4` prop.
     */
    rowColsMd4?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-5` class to the element. Alias for `row-cols-md-5` prop.
     */
    rowColsMd5?: boolean
    /**
     * Add Bootstrap's `.row-cols-md-6` class to the element. Alias for `row-cols-md-6` prop.
     */
    rowColsMd6?: boolean
    /**
     * Add Bootstrap's `.order-md-first` class to the element. Alias for `order-md-first` prop.
     */
    orderMdFirst?: boolean
    /**
     * Add Bootstrap's `.order-md-last` class to the element. Alias for `order-md-last` prop.
     */
    orderMdLast?: boolean
    /**
     * Add Bootstrap's `.order-md-0` class to the element. Alias for `order-md-0` prop.
     */
    orderMd0?: boolean
    /**
     * Add Bootstrap's `.order-md-1` class to the element. Alias for `order-md-1` prop.
     */
    orderMd1?: boolean
    /**
     * Add Bootstrap's `.order-md-2` class to the element. Alias for `order-md-2` prop.
     */
    orderMd2?: boolean
    /**
     * Add Bootstrap's `.order-md-3` class to the element. Alias for `order-md-3` prop.
     */
    orderMd3?: boolean
    /**
     * Add Bootstrap's `.order-md-4` class to the element. Alias for `order-md-4` prop.
     */
    orderMd4?: boolean
    /**
     * Add Bootstrap's `.order-md-5` class to the element. Alias for `order-md-5` prop.
     */
    orderMd5?: boolean
    /**
     * Add Bootstrap's `.order-md-6` class to the element. Alias for `order-md-6` prop.
     */
    orderMd6?: boolean
    /**
     * Add Bootstrap's `.order-md-7` class to the element. Alias for `order-md-7` prop.
     */
    orderMd7?: boolean
    /**
     * Add Bootstrap's `.order-md-8` class to the element. Alias for `order-md-8` prop.
     */
    orderMd8?: boolean
    /**
     * Add Bootstrap's `.order-md-9` class to the element. Alias for `order-md-9` prop.
     */
    orderMd9?: boolean
    /**
     * Add Bootstrap's `.order-md-10` class to the element. Alias for `order-md-10` prop.
     */
    orderMd10?: boolean
    /**
     * Add Bootstrap's `.order-md-11` class to the element. Alias for `order-md-11` prop.
     */
    orderMd11?: boolean
    /**
     * Add Bootstrap's `.order-md-12` class to the element. Alias for `order-md-12` prop.
     */
    orderMd12?: boolean
    /**
     * Add Bootstrap's `.offset-md-0` class to the element. Alias for `offset-md-0` prop.
     */
    offsetMd0?: boolean
    /**
     * Add Bootstrap's `.offset-md-1` class to the element. Alias for `offset-md-1` prop.
     */
    offsetMd1?: boolean
    /**
     * Add Bootstrap's `.offset-md-2` class to the element. Alias for `offset-md-2` prop.
     */
    offsetMd2?: boolean
    /**
     * Add Bootstrap's `.offset-md-3` class to the element. Alias for `offset-md-3` prop.
     */
    offsetMd3?: boolean
    /**
     * Add Bootstrap's `.offset-md-4` class to the element. Alias for `offset-md-4` prop.
     */
    offsetMd4?: boolean
    /**
     * Add Bootstrap's `.offset-md-5` class to the element. Alias for `offset-md-5` prop.
     */
    offsetMd5?: boolean
    /**
     * Add Bootstrap's `.offset-md-6` class to the element. Alias for `offset-md-6` prop.
     */
    offsetMd6?: boolean
    /**
     * Add Bootstrap's `.offset-md-7` class to the element. Alias for `offset-md-7` prop.
     */
    offsetMd7?: boolean
    /**
     * Add Bootstrap's `.offset-md-8` class to the element. Alias for `offset-md-8` prop.
     */
    offsetMd8?: boolean
    /**
     * Add Bootstrap's `.offset-md-9` class to the element. Alias for `offset-md-9` prop.
     */
    offsetMd9?: boolean
    /**
     * Add Bootstrap's `.offset-md-10` class to the element. Alias for `offset-md-10` prop.
     */
    offsetMd10?: boolean
    /**
     * Add Bootstrap's `.offset-md-11` class to the element. Alias for `offset-md-11` prop.
     */
    offsetMd11?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-1` class to the element. Alias for `row-cols-lg-1` prop.
     */
    rowColsLg1?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-2` class to the element. Alias for `row-cols-lg-2` prop.
     */
    rowColsLg2?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-3` class to the element. Alias for `row-cols-lg-3` prop.
     */
    rowColsLg3?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-4` class to the element. Alias for `row-cols-lg-4` prop.
     */
    rowColsLg4?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-5` class to the element. Alias for `row-cols-lg-5` prop.
     */
    rowColsLg5?: boolean
    /**
     * Add Bootstrap's `.row-cols-lg-6` class to the element. Alias for `row-cols-lg-6` prop.
     */
    rowColsLg6?: boolean
    /**
     * Add Bootstrap's `.order-lg-first` class to the element. Alias for `order-lg-first` prop.
     */
    orderLgFirst?: boolean
    /**
     * Add Bootstrap's `.order-lg-last` class to the element. Alias for `order-lg-last` prop.
     */
    orderLgLast?: boolean
    /**
     * Add Bootstrap's `.order-lg-0` class to the element. Alias for `order-lg-0` prop.
     */
    orderLg0?: boolean
    /**
     * Add Bootstrap's `.order-lg-1` class to the element. Alias for `order-lg-1` prop.
     */
    orderLg1?: boolean
    /**
     * Add Bootstrap's `.order-lg-2` class to the element. Alias for `order-lg-2` prop.
     */
    orderLg2?: boolean
    /**
     * Add Bootstrap's `.order-lg-3` class to the element. Alias for `order-lg-3` prop.
     */
    orderLg3?: boolean
    /**
     * Add Bootstrap's `.order-lg-4` class to the element. Alias for `order-lg-4` prop.
     */
    orderLg4?: boolean
    /**
     * Add Bootstrap's `.order-lg-5` class to the element. Alias for `order-lg-5` prop.
     */
    orderLg5?: boolean
    /**
     * Add Bootstrap's `.order-lg-6` class to the element. Alias for `order-lg-6` prop.
     */
    orderLg6?: boolean
    /**
     * Add Bootstrap's `.order-lg-7` class to the element. Alias for `order-lg-7` prop.
     */
    orderLg7?: boolean
    /**
     * Add Bootstrap's `.order-lg-8` class to the element. Alias for `order-lg-8` prop.
     */
    orderLg8?: boolean
    /**
     * Add Bootstrap's `.order-lg-9` class to the element. Alias for `order-lg-9` prop.
     */
    orderLg9?: boolean
    /**
     * Add Bootstrap's `.order-lg-10` class to the element. Alias for `order-lg-10` prop.
     */
    orderLg10?: boolean
    /**
     * Add Bootstrap's `.order-lg-11` class to the element. Alias for `order-lg-11` prop.
     */
    orderLg11?: boolean
    /**
     * Add Bootstrap's `.order-lg-12` class to the element. Alias for `order-lg-12` prop.
     */
    orderLg12?: boolean
    /**
     * Add Bootstrap's `.offset-lg-0` class to the element. Alias for `offset-lg-0` prop.
     */
    offsetLg0?: boolean
    /**
     * Add Bootstrap's `.offset-lg-1` class to the element. Alias for `offset-lg-1` prop.
     */
    offsetLg1?: boolean
    /**
     * Add Bootstrap's `.offset-lg-2` class to the element. Alias for `offset-lg-2` prop.
     */
    offsetLg2?: boolean
    /**
     * Add Bootstrap's `.offset-lg-3` class to the element. Alias for `offset-lg-3` prop.
     */
    offsetLg3?: boolean
    /**
     * Add Bootstrap's `.offset-lg-4` class to the element. Alias for `offset-lg-4` prop.
     */
    offsetLg4?: boolean
    /**
     * Add Bootstrap's `.offset-lg-5` class to the element. Alias for `offset-lg-5` prop.
     */
    offsetLg5?: boolean
    /**
     * Add Bootstrap's `.offset-lg-6` class to the element. Alias for `offset-lg-6` prop.
     */
    offsetLg6?: boolean
    /**
     * Add Bootstrap's `.offset-lg-7` class to the element. Alias for `offset-lg-7` prop.
     */
    offsetLg7?: boolean
    /**
     * Add Bootstrap's `.offset-lg-8` class to the element. Alias for `offset-lg-8` prop.
     */
    offsetLg8?: boolean
    /**
     * Add Bootstrap's `.offset-lg-9` class to the element. Alias for `offset-lg-9` prop.
     */
    offsetLg9?: boolean
    /**
     * Add Bootstrap's `.offset-lg-10` class to the element. Alias for `offset-lg-10` prop.
     */
    offsetLg10?: boolean
    /**
     * Add Bootstrap's `.offset-lg-11` class to the element. Alias for `offset-lg-11` prop.
     */
    offsetLg11?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-1` class to the element. Alias for `row-cols-xl-1` prop.
     */
    rowColsXl1?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-2` class to the element. Alias for `row-cols-xl-2` prop.
     */
    rowColsXl2?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-3` class to the element. Alias for `row-cols-xl-3` prop.
     */
    rowColsXl3?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-4` class to the element. Alias for `row-cols-xl-4` prop.
     */
    rowColsXl4?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-5` class to the element. Alias for `row-cols-xl-5` prop.
     */
    rowColsXl5?: boolean
    /**
     * Add Bootstrap's `.row-cols-xl-6` class to the element. Alias for `row-cols-xl-6` prop.
     */
    rowColsXl6?: boolean
    /**
     * Add Bootstrap's `.order-xl-first` class to the element. Alias for `order-xl-first` prop.
     */
    orderXlFirst?: boolean
    /**
     * Add Bootstrap's `.order-xl-last` class to the element. Alias for `order-xl-last` prop.
     */
    orderXlLast?: boolean
    /**
     * Add Bootstrap's `.order-xl-0` class to the element. Alias for `order-xl-0` prop.
     */
    orderXl0?: boolean
    /**
     * Add Bootstrap's `.order-xl-1` class to the element. Alias for `order-xl-1` prop.
     */
    orderXl1?: boolean
    /**
     * Add Bootstrap's `.order-xl-2` class to the element. Alias for `order-xl-2` prop.
     */
    orderXl2?: boolean
    /**
     * Add Bootstrap's `.order-xl-3` class to the element. Alias for `order-xl-3` prop.
     */
    orderXl3?: boolean
    /**
     * Add Bootstrap's `.order-xl-4` class to the element. Alias for `order-xl-4` prop.
     */
    orderXl4?: boolean
    /**
     * Add Bootstrap's `.order-xl-5` class to the element. Alias for `order-xl-5` prop.
     */
    orderXl5?: boolean
    /**
     * Add Bootstrap's `.order-xl-6` class to the element. Alias for `order-xl-6` prop.
     */
    orderXl6?: boolean
    /**
     * Add Bootstrap's `.order-xl-7` class to the element. Alias for `order-xl-7` prop.
     */
    orderXl7?: boolean
    /**
     * Add Bootstrap's `.order-xl-8` class to the element. Alias for `order-xl-8` prop.
     */
    orderXl8?: boolean
    /**
     * Add Bootstrap's `.order-xl-9` class to the element. Alias for `order-xl-9` prop.
     */
    orderXl9?: boolean
    /**
     * Add Bootstrap's `.order-xl-10` class to the element. Alias for `order-xl-10` prop.
     */
    orderXl10?: boolean
    /**
     * Add Bootstrap's `.order-xl-11` class to the element. Alias for `order-xl-11` prop.
     */
    orderXl11?: boolean
    /**
     * Add Bootstrap's `.order-xl-12` class to the element. Alias for `order-xl-12` prop.
     */
    orderXl12?: boolean
    /**
     * Add Bootstrap's `.offset-xl-0` class to the element. Alias for `offset-xl-0` prop.
     */
    offsetXl0?: boolean
    /**
     * Add Bootstrap's `.offset-xl-1` class to the element. Alias for `offset-xl-1` prop.
     */
    offsetXl1?: boolean
    /**
     * Add Bootstrap's `.offset-xl-2` class to the element. Alias for `offset-xl-2` prop.
     */
    offsetXl2?: boolean
    /**
     * Add Bootstrap's `.offset-xl-3` class to the element. Alias for `offset-xl-3` prop.
     */
    offsetXl3?: boolean
    /**
     * Add Bootstrap's `.offset-xl-4` class to the element. Alias for `offset-xl-4` prop.
     */
    offsetXl4?: boolean
    /**
     * Add Bootstrap's `.offset-xl-5` class to the element. Alias for `offset-xl-5` prop.
     */
    offsetXl5?: boolean
    /**
     * Add Bootstrap's `.offset-xl-6` class to the element. Alias for `offset-xl-6` prop.
     */
    offsetXl6?: boolean
    /**
     * Add Bootstrap's `.offset-xl-7` class to the element. Alias for `offset-xl-7` prop.
     */
    offsetXl7?: boolean
    /**
     * Add Bootstrap's `.offset-xl-8` class to the element. Alias for `offset-xl-8` prop.
     */
    offsetXl8?: boolean
    /**
     * Add Bootstrap's `.offset-xl-9` class to the element. Alias for `offset-xl-9` prop.
     */
    offsetXl9?: boolean
    /**
     * Add Bootstrap's `.offset-xl-10` class to the element. Alias for `offset-xl-10` prop.
     */
    offsetXl10?: boolean
    /**
     * Add Bootstrap's `.offset-xl-11` class to the element. Alias for `offset-xl-11` prop.
     */
    offsetXl11?: boolean
    /**
     * Add Bootstrap's `.table-sm` class to the element. Alias for `table-sm` prop.
     */
    tableSm?: boolean
    /**
     * Add Bootstrap's `.table-bordered` class to the element. Alias for `table-bordered` prop.
     */
    tableBordered?: boolean
    /**
     * Add Bootstrap's `.table-borderless` class to the element. Alias for `table-borderless` prop.
     */
    tableBorderless?: boolean
    /**
     * Add Bootstrap's `.table-striped` class to the element. Alias for `table-striped` prop.
     */
    tableStriped?: boolean
    /**
     * Add Bootstrap's `.table-hover` class to the element. Alias for `table-hover` prop.
     */
    tableHover?: boolean
    /**
     * Add Bootstrap's `.table-primary` class to the element. Alias for `table-primary` prop.
     */
    tablePrimary?: boolean
    /**
     * Add Bootstrap's `.table-secondary` class to the element. Alias for `table-secondary` prop.
     */
    tableSecondary?: boolean
    /**
     * Add Bootstrap's `.table-success` class to the element. Alias for `table-success` prop.
     */
    tableSuccess?: boolean
    /**
     * Add Bootstrap's `.table-info` class to the element. Alias for `table-info` prop.
     */
    tableInfo?: boolean
    /**
     * Add Bootstrap's `.table-warning` class to the element. Alias for `table-warning` prop.
     */
    tableWarning?: boolean
    /**
     * Add Bootstrap's `.table-danger` class to the element. Alias for `table-danger` prop.
     */
    tableDanger?: boolean
    /**
     * Add Bootstrap's `.table-light` class to the element. Alias for `table-light` prop.
     */
    tableLight?: boolean
    /**
     * Add Bootstrap's `.table-dark` class to the element. Alias for `table-dark` prop.
     */
    tableDark?: boolean
    /**
     * Add Bootstrap's `.table-active` class to the element. Alias for `table-active` prop.
     */
    tableActive?: boolean
    /**
     * Add Bootstrap's `.thead-dark` class to the element. Alias for `thead-dark` prop.
     */
    theadDark?: boolean
    /**
     * Add Bootstrap's `.thead-light` class to the element. Alias for `thead-light` prop.
     */
    theadLight?: boolean
    /**
     * Add Bootstrap's `.table-responsive-sm` class to the element. Alias for `table-responsive-sm` prop.
     */
    tableResponsiveSm?: boolean
    /**
     * Add Bootstrap's `.table-responsive-md` class to the element. Alias for `table-responsive-md` prop.
     */
    tableResponsiveMd?: boolean
    /**
     * Add Bootstrap's `.table-responsive-lg` class to the element. Alias for `table-responsive-lg` prop.
     */
    tableResponsiveLg?: boolean
    /**
     * Add Bootstrap's `.table-responsive-xl` class to the element. Alias for `table-responsive-xl` prop.
     */
    tableResponsiveXl?: boolean
    /**
     * Add Bootstrap's `.table-responsive` class to the element. Alias for `table-responsive` prop.
     */
    tableResponsive?: boolean
    /**
     * Add Bootstrap's `.form-control` class to the element. Alias for `form-control` prop.
     */
    formControl?: boolean
    /**
     * Add Bootstrap's `.form-control-file` class to the element. Alias for `form-control-file` prop.
     */
    formControlFile?: boolean
    /**
     * Add Bootstrap's `.form-control-range` class to the element. Alias for `form-control-range` prop.
     */
    formControlRange?: boolean
    /**
     * Add Bootstrap's `.col-form-label` class to the element. Alias for `col-form-label` prop.
     */
    colFormLabel?: boolean
    /**
     * Add Bootstrap's `.col-form-label-lg` class to the element. Alias for `col-form-label-lg` prop.
     */
    colFormLabelLg?: boolean
    /**
     * Add Bootstrap's `.col-form-label-sm` class to the element. Alias for `col-form-label-sm` prop.
     */
    colFormLabelSm?: boolean
    /**
     * Add Bootstrap's `.form-control-plaintext` class to the element. Alias for `form-control-plaintext` prop.
     */
    formControlPlaintext?: boolean
    /**
     * Add Bootstrap's `.form-control-sm` class to the element. Alias for `form-control-sm` prop.
     */
    formControlSm?: boolean
    /**
     * Add Bootstrap's `.form-control-lg` class to the element. Alias for `form-control-lg` prop.
     */
    formControlLg?: boolean
    /**
     * Add Bootstrap's `.form-group` class to the element. Alias for `form-group` prop.
     */
    formGroup?: boolean
    /**
     * Add Bootstrap's `.form-text` class to the element. Alias for `form-text` prop.
     */
    formText?: boolean
    /**
     * Add Bootstrap's `.form-row` class to the element. Alias for `form-row` prop.
     */
    formRow?: boolean
    /**
     * Add Bootstrap's `.form-check` class to the element. Alias for `form-check` prop.
     */
    formCheck?: boolean
    /**
     * Add Bootstrap's `.form-check-input` class to the element. Alias for `form-check-input` prop.
     */
    formCheckInput?: boolean
    /**
     * Add Bootstrap's `.form-check-label` class to the element. Alias for `form-check-label` prop.
     */
    formCheckLabel?: boolean
    /**
     * Add Bootstrap's `.form-check-inline` class to the element. Alias for `form-check-inline` prop.
     */
    formCheckInline?: boolean
    /**
     * Add Bootstrap's `.valid-feedback` class to the element. Alias for `valid-feedback` prop.
     */
    validFeedback?: boolean
    /**
     * Add Bootstrap's `.valid-tooltip` class to the element. Alias for `valid-tooltip` prop.
     */
    validTooltip?: boolean
    /**
     * Add Bootstrap's `.was-validated` class to the element. Alias for `was-validated` prop.
     */
    wasValidated?: boolean
    /**
     * Add Bootstrap's `.is-valid` class to the element. Alias for `is-valid` prop.
     */
    isValid?: boolean
    /**
     * Add Bootstrap's `.custom-select` class to the element. Alias for `custom-select` prop.
     */
    customSelect?: boolean
    /**
     * Add Bootstrap's `.custom-control-input` class to the element. Alias for `custom-control-input` prop.
     */
    customControlInput?: boolean
    /**
     * Add Bootstrap's `.custom-control-label` class to the element. Alias for `custom-control-label` prop.
     */
    customControlLabel?: boolean
    /**
     * Add Bootstrap's `.custom-file-input` class to the element. Alias for `custom-file-input` prop.
     */
    customFileInput?: boolean
    /**
     * Add Bootstrap's `.custom-file-label` class to the element. Alias for `custom-file-label` prop.
     */
    customFileLabel?: boolean
    /**
     * Add Bootstrap's `.invalid-feedback` class to the element. Alias for `invalid-feedback` prop.
     */
    invalidFeedback?: boolean
    /**
     * Add Bootstrap's `.invalid-tooltip` class to the element. Alias for `invalid-tooltip` prop.
     */
    invalidTooltip?: boolean
    /**
     * Add Bootstrap's `.is-invalid` class to the element. Alias for `is-invalid` prop.
     */
    isInvalid?: boolean
    /**
     * Add Bootstrap's `.form-inline` class to the element. Alias for `form-inline` prop.
     */
    formInline?: boolean
    /**
     * Add Bootstrap's `.input-group` class to the element. Alias for `input-group` prop.
     */
    inputGroup?: boolean
    /**
     * Add Bootstrap's `.custom-control` class to the element. Alias for `custom-control` prop.
     */
    customControl?: boolean
    /**
     * Add Bootstrap's `.btn-primary` class to the element. Alias for `btn-primary` prop.
     */
    btnPrimary?: boolean
    /**
     * Add Bootstrap's `.dropdown-toggle` class to the element. Alias for `dropdown-toggle` prop.
     */
    dropdownToggle?: boolean
    /**
     * Add Bootstrap's `.btn-secondary` class to the element. Alias for `btn-secondary` prop.
     */
    btnSecondary?: boolean
    /**
     * Add Bootstrap's `.btn-success` class to the element. Alias for `btn-success` prop.
     */
    btnSuccess?: boolean
    /**
     * Add Bootstrap's `.btn-info` class to the element. Alias for `btn-info` prop.
     */
    btnInfo?: boolean
    /**
     * Add Bootstrap's `.btn-warning` class to the element. Alias for `btn-warning` prop.
     */
    btnWarning?: boolean
    /**
     * Add Bootstrap's `.btn-danger` class to the element. Alias for `btn-danger` prop.
     */
    btnDanger?: boolean
    /**
     * Add Bootstrap's `.btn-light` class to the element. Alias for `btn-light` prop.
     */
    btnLight?: boolean
    /**
     * Add Bootstrap's `.btn-dark` class to the element. Alias for `btn-dark` prop.
     */
    btnDark?: boolean
    /**
     * Add Bootstrap's `.btn-outline-primary` class to the element. Alias for `btn-outline-primary` prop.
     */
    btnOutlinePrimary?: boolean
    /**
     * Add Bootstrap's `.btn-outline-secondary` class to the element. Alias for `btn-outline-secondary` prop.
     */
    btnOutlineSecondary?: boolean
    /**
     * Add Bootstrap's `.btn-outline-success` class to the element. Alias for `btn-outline-success` prop.
     */
    btnOutlineSuccess?: boolean
    /**
     * Add Bootstrap's `.btn-outline-info` class to the element. Alias for `btn-outline-info` prop.
     */
    btnOutlineInfo?: boolean
    /**
     * Add Bootstrap's `.btn-outline-warning` class to the element. Alias for `btn-outline-warning` prop.
     */
    btnOutlineWarning?: boolean
    /**
     * Add Bootstrap's `.btn-outline-danger` class to the element. Alias for `btn-outline-danger` prop.
     */
    btnOutlineDanger?: boolean
    /**
     * Add Bootstrap's `.btn-outline-light` class to the element. Alias for `btn-outline-light` prop.
     */
    btnOutlineLight?: boolean
    /**
     * Add Bootstrap's `.btn-outline-dark` class to the element. Alias for `btn-outline-dark` prop.
     */
    btnOutlineDark?: boolean
    /**
     * Add Bootstrap's `.btn-link` class to the element. Alias for `btn-link` prop.
     */
    btnLink?: boolean
    /**
     * Add Bootstrap's `.btn-lg` class to the element. Alias for `btn-lg` prop.
     */
    btnLg?: boolean
    /**
     * Add Bootstrap's `.btn-group-lg` class to the element. Alias for `btn-group-lg` prop.
     */
    btnGroupLg?: boolean
    /**
     * Add Bootstrap's `.btn-sm` class to the element. Alias for `btn-sm` prop.
     */
    btnSm?: boolean
    /**
     * Add Bootstrap's `.btn-group-sm` class to the element. Alias for `btn-group-sm` prop.
     */
    btnGroupSm?: boolean
    /**
     * Add Bootstrap's `.btn-block` class to the element. Alias for `btn-block` prop.
     */
    btnBlock?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu` class to the element. Alias for `dropdown-menu` prop.
     */
    dropdownMenu?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-left` class to the element. Alias for `dropdown-menu-left` prop.
     */
    dropdownMenuLeft?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-right` class to the element. Alias for `dropdown-menu-right` prop.
     */
    dropdownMenuRight?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-sm-left` class to the element. Alias for `dropdown-menu-sm-left` prop.
     */
    dropdownMenuSmLeft?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-sm-right` class to the element. Alias for `dropdown-menu-sm-right` prop.
     */
    dropdownMenuSmRight?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-md-left` class to the element. Alias for `dropdown-menu-md-left` prop.
     */
    dropdownMenuMdLeft?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-md-right` class to the element. Alias for `dropdown-menu-md-right` prop.
     */
    dropdownMenuMdRight?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-lg-left` class to the element. Alias for `dropdown-menu-lg-left` prop.
     */
    dropdownMenuLgLeft?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-lg-right` class to the element. Alias for `dropdown-menu-lg-right` prop.
     */
    dropdownMenuLgRight?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-xl-left` class to the element. Alias for `dropdown-menu-xl-left` prop.
     */
    dropdownMenuXlLeft?: boolean
    /**
     * Add Bootstrap's `.dropdown-menu-xl-right` class to the element. Alias for `dropdown-menu-xl-right` prop.
     */
    dropdownMenuXlRight?: boolean
    /**
     * Add Bootstrap's `.dropdown-divider` class to the element. Alias for `dropdown-divider` prop.
     */
    dropdownDivider?: boolean
    /**
     * Add Bootstrap's `.dropdown-item` class to the element. Alias for `dropdown-item` prop.
     */
    dropdownItem?: boolean
    /**
     * Add Bootstrap's `.dropdown-header` class to the element. Alias for `dropdown-header` prop.
     */
    dropdownHeader?: boolean
    /**
     * Add Bootstrap's `.dropdown-item-text` class to the element. Alias for `dropdown-item-text` prop.
     */
    dropdownItemText?: boolean
    /**
     * Add Bootstrap's `.btn-group` class to the element. Alias for `btn-group` prop.
     */
    btnGroup?: boolean
    /**
     * Add Bootstrap's `.btn-group-vertical` class to the element. Alias for `btn-group-vertical` prop.
     */
    btnGroupVertical?: boolean
    /**
     * Add Bootstrap's `.btn-toolbar` class to the element. Alias for `btn-toolbar` prop.
     */
    btnToolbar?: boolean
    /**
     * Add Bootstrap's `.dropdown-toggle-split` class to the element. Alias for `dropdown-toggle-split` prop.
     */
    dropdownToggleSplit?: boolean
    /**
     * Add Bootstrap's `.btn-group-toggle` class to the element. Alias for `btn-group-toggle` prop.
     */
    btnGroupToggle?: boolean
    /**
     * Add Bootstrap's `.custom-file` class to the element. Alias for `custom-file` prop.
     */
    customFile?: boolean
    /**
     * Add Bootstrap's `.input-group-prepend` class to the element. Alias for `input-group-prepend` prop.
     */
    inputGroupPrepend?: boolean
    /**
     * Add Bootstrap's `.input-group-append` class to the element. Alias for `input-group-append` prop.
     */
    inputGroupAppend?: boolean
    /**
     * Add Bootstrap's `.input-group-text` class to the element. Alias for `input-group-text` prop.
     */
    inputGroupText?: boolean
    /**
     * Add Bootstrap's `.input-group-lg` class to the element. Alias for `input-group-lg` prop.
     */
    inputGroupLg?: boolean
    /**
     * Add Bootstrap's `.input-group-sm` class to the element. Alias for `input-group-sm` prop.
     */
    inputGroupSm?: boolean
    /**
     * Add Bootstrap's `.custom-control-inline` class to the element. Alias for `custom-control-inline` prop.
     */
    customControlInline?: boolean
    /**
     * Add Bootstrap's `.custom-checkbox` class to the element. Alias for `custom-checkbox` prop.
     */
    customCheckbox?: boolean
    /**
     * Add Bootstrap's `.custom-radio` class to the element. Alias for `custom-radio` prop.
     */
    customRadio?: boolean
    /**
     * Add Bootstrap's `.custom-switch` class to the element. Alias for `custom-switch` prop.
     */
    customSwitch?: boolean
    /**
     * Add Bootstrap's `.custom-select-sm` class to the element. Alias for `custom-select-sm` prop.
     */
    customSelectSm?: boolean
    /**
     * Add Bootstrap's `.custom-select-lg` class to the element. Alias for `custom-select-lg` prop.
     */
    customSelectLg?: boolean
    /**
     * Add Bootstrap's `.custom-range` class to the element. Alias for `custom-range` prop.
     */
    customRange?: boolean
    /**
     * Add Bootstrap's `.nav-link` class to the element. Alias for `nav-link` prop.
     */
    navLink?: boolean
    /**
     * Add Bootstrap's `.nav-tabs` class to the element. Alias for `nav-tabs` prop.
     */
    navTabs?: boolean
    /**
     * Add Bootstrap's `.nav-item` class to the element. Alias for `nav-item` prop.
     */
    navItem?: boolean
    /**
     * Add Bootstrap's `.nav-pills` class to the element. Alias for `nav-pills` prop.
     */
    navPills?: boolean
    /**
     * Add Bootstrap's `.nav-fill` class to the element. Alias for `nav-fill` prop.
     */
    navFill?: boolean
    /**
     * Add Bootstrap's `.nav-justified` class to the element. Alias for `nav-justified` prop.
     */
    navJustified?: boolean
    /**
     * Add Bootstrap's `.tab-content` class to the element. Alias for `tab-content` prop.
     */
    tabContent?: boolean
    /**
     * Add Bootstrap's `.tab-pane` class to the element. Alias for `tab-pane` prop.
     */
    tabPane?: boolean
    /**
     * Add Bootstrap's `.navbar-brand` class to the element. Alias for `navbar-brand` prop.
     */
    navbarBrand?: boolean
    /**
     * Add Bootstrap's `.navbar-nav` class to the element. Alias for `navbar-nav` prop.
     */
    navbarNav?: boolean
    /**
     * Add Bootstrap's `.navbar-text` class to the element. Alias for `navbar-text` prop.
     */
    navbarText?: boolean
    /**
     * Add Bootstrap's `.navbar-collapse` class to the element. Alias for `navbar-collapse` prop.
     */
    navbarCollapse?: boolean
    /**
     * Add Bootstrap's `.navbar-toggler` class to the element. Alias for `navbar-toggler` prop.
     */
    navbarToggler?: boolean
    /**
     * Add Bootstrap's `.navbar-toggler-icon` class to the element. Alias for `navbar-toggler-icon` prop.
     */
    navbarTogglerIcon?: boolean
    /**
     * Add Bootstrap's `.navbar-expand-sm` class to the element. Alias for `navbar-expand-sm` prop.
     */
    navbarExpandSm?: boolean
    /**
     * Add Bootstrap's `.navbar-expand-md` class to the element. Alias for `navbar-expand-md` prop.
     */
    navbarExpandMd?: boolean
    /**
     * Add Bootstrap's `.navbar-expand-lg` class to the element. Alias for `navbar-expand-lg` prop.
     */
    navbarExpandLg?: boolean
    /**
     * Add Bootstrap's `.navbar-expand-xl` class to the element. Alias for `navbar-expand-xl` prop.
     */
    navbarExpandXl?: boolean
    /**
     * Add Bootstrap's `.navbar-expand` class to the element. Alias for `navbar-expand` prop.
     */
    navbarExpand?: boolean
    /**
     * Add Bootstrap's `.navbar-light` class to the element. Alias for `navbar-light` prop.
     */
    navbarLight?: boolean
    /**
     * Add Bootstrap's `.navbar-dark` class to the element. Alias for `navbar-dark` prop.
     */
    navbarDark?: boolean
    /**
     * Add Bootstrap's `.list-group` class to the element. Alias for `list-group` prop.
     */
    listGroup?: boolean
    /**
     * Add Bootstrap's `.list-group-item` class to the element. Alias for `list-group-item` prop.
     */
    listGroupItem?: boolean
    /**
     * Add Bootstrap's `.card-body` class to the element. Alias for `card-body` prop.
     */
    cardBody?: boolean
    /**
     * Add Bootstrap's `.card-title` class to the element. Alias for `card-title` prop.
     */
    cardTitle?: boolean
    /**
     * Add Bootstrap's `.card-subtitle` class to the element. Alias for `card-subtitle` prop.
     */
    cardSubtitle?: boolean
    /**
     * Add Bootstrap's `.card-text` class to the element. Alias for `card-text` prop.
     */
    cardText?: boolean
    /**
     * Add Bootstrap's `.card-link` class to the element. Alias for `card-link` prop.
     */
    cardLink?: boolean
    /**
     * Add Bootstrap's `.card-header` class to the element. Alias for `card-header` prop.
     */
    cardHeader?: boolean
    /**
     * Add Bootstrap's `.card-footer` class to the element. Alias for `card-footer` prop.
     */
    cardFooter?: boolean
    /**
     * Add Bootstrap's `.card-header-tabs` class to the element. Alias for `card-header-tabs` prop.
     */
    cardHeaderTabs?: boolean
    /**
     * Add Bootstrap's `.card-header-pills` class to the element. Alias for `card-header-pills` prop.
     */
    cardHeaderPills?: boolean
    /**
     * Add Bootstrap's `.card-img-overlay` class to the element. Alias for `card-img-overlay` prop.
     */
    cardImgOverlay?: boolean
    /**
     * Add Bootstrap's `.card-img` class to the element. Alias for `card-img` prop.
     */
    cardImg?: boolean
    /**
     * Add Bootstrap's `.card-img-top` class to the element. Alias for `card-img-top` prop.
     */
    cardImgTop?: boolean
    /**
     * Add Bootstrap's `.card-img-bottom` class to the element. Alias for `card-img-bottom` prop.
     */
    cardImgBottom?: boolean
    /**
     * Add Bootstrap's `.card-deck` class to the element. Alias for `card-deck` prop.
     */
    cardDeck?: boolean
    /**
     * Add Bootstrap's `.card-group` class to the element. Alias for `card-group` prop.
     */
    cardGroup?: boolean
    /**
     * Add Bootstrap's `.card-columns` class to the element. Alias for `card-columns` prop.
     */
    cardColumns?: boolean
    /**
     * Add Bootstrap's `.breadcrumb-item` class to the element. Alias for `breadcrumb-item` prop.
     */
    breadcrumbItem?: boolean
    /**
     * Add Bootstrap's `.page-link` class to the element. Alias for `page-link` prop.
     */
    pageLink?: boolean
    /**
     * Add Bootstrap's `.page-item` class to the element. Alias for `page-item` prop.
     */
    pageItem?: boolean
    /**
     * Add Bootstrap's `.pagination-lg` class to the element. Alias for `pagination-lg` prop.
     */
    paginationLg?: boolean
    /**
     * Add Bootstrap's `.pagination-sm` class to the element. Alias for `pagination-sm` prop.
     */
    paginationSm?: boolean
    /**
     * Add Bootstrap's `.badge-pill` class to the element. Alias for `badge-pill` prop.
     */
    badgePill?: boolean
    /**
     * Add Bootstrap's `.badge-primary` class to the element. Alias for `badge-primary` prop.
     */
    badgePrimary?: boolean
    /**
     * Add Bootstrap's `.badge-secondary` class to the element. Alias for `badge-secondary` prop.
     */
    badgeSecondary?: boolean
    /**
     * Add Bootstrap's `.badge-success` class to the element. Alias for `badge-success` prop.
     */
    badgeSuccess?: boolean
    /**
     * Add Bootstrap's `.badge-info` class to the element. Alias for `badge-info` prop.
     */
    badgeInfo?: boolean
    /**
     * Add Bootstrap's `.badge-warning` class to the element. Alias for `badge-warning` prop.
     */
    badgeWarning?: boolean
    /**
     * Add Bootstrap's `.badge-danger` class to the element. Alias for `badge-danger` prop.
     */
    badgeDanger?: boolean
    /**
     * Add Bootstrap's `.badge-light` class to the element. Alias for `badge-light` prop.
     */
    badgeLight?: boolean
    /**
     * Add Bootstrap's `.badge-dark` class to the element. Alias for `badge-dark` prop.
     */
    badgeDark?: boolean
    /**
     * Add Bootstrap's `.jumbotron-fluid` class to the element. Alias for `jumbotron-fluid` prop.
     */
    jumbotronFluid?: boolean
    /**
     * Add Bootstrap's `.alert-heading` class to the element. Alias for `alert-heading` prop.
     */
    alertHeading?: boolean
    /**
     * Add Bootstrap's `.alert-link` class to the element. Alias for `alert-link` prop.
     */
    alertLink?: boolean
    /**
     * Add Bootstrap's `.alert-dismissible` class to the element. Alias for `alert-dismissible` prop.
     */
    alertDismissible?: boolean
    /**
     * Add Bootstrap's `.alert-primary` class to the element. Alias for `alert-primary` prop.
     */
    alertPrimary?: boolean
    /**
     * Add Bootstrap's `.alert-secondary` class to the element. Alias for `alert-secondary` prop.
     */
    alertSecondary?: boolean
    /**
     * Add Bootstrap's `.alert-success` class to the element. Alias for `alert-success` prop.
     */
    alertSuccess?: boolean
    /**
     * Add Bootstrap's `.alert-info` class to the element. Alias for `alert-info` prop.
     */
    alertInfo?: boolean
    /**
     * Add Bootstrap's `.alert-warning` class to the element. Alias for `alert-warning` prop.
     */
    alertWarning?: boolean
    /**
     * Add Bootstrap's `.alert-danger` class to the element. Alias for `alert-danger` prop.
     */
    alertDanger?: boolean
    /**
     * Add Bootstrap's `.alert-light` class to the element. Alias for `alert-light` prop.
     */
    alertLight?: boolean
    /**
     * Add Bootstrap's `.alert-dark` class to the element. Alias for `alert-dark` prop.
     */
    alertDark?: boolean
    /**
     * Add Bootstrap's `.progress-bar` class to the element. Alias for `progress-bar` prop.
     */
    progressBar?: boolean
    /**
     * Add Bootstrap's `.progress-bar-striped` class to the element. Alias for `progress-bar-striped` prop.
     */
    progressBarStriped?: boolean
    /**
     * Add Bootstrap's `.progress-bar-animated` class to the element. Alias for `progress-bar-animated` prop.
     */
    progressBarAnimated?: boolean
    /**
     * Add Bootstrap's `.media-body` class to the element. Alias for `media-body` prop.
     */
    mediaBody?: boolean
    /**
     * Add Bootstrap's `.list-group-item-action` class to the element. Alias for `list-group-item-action` prop.
     */
    listGroupItemAction?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal` class to the element. Alias for `list-group-horizontal` prop.
     */
    listGroupHorizontal?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal-sm` class to the element. Alias for `list-group-horizontal-sm` prop.
     */
    listGroupHorizontalSm?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal-md` class to the element. Alias for `list-group-horizontal-md` prop.
     */
    listGroupHorizontalMd?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal-lg` class to the element. Alias for `list-group-horizontal-lg` prop.
     */
    listGroupHorizontalLg?: boolean
    /**
     * Add Bootstrap's `.list-group-horizontal-xl` class to the element. Alias for `list-group-horizontal-xl` prop.
     */
    listGroupHorizontalXl?: boolean
    /**
     * Add Bootstrap's `.list-group-flush` class to the element. Alias for `list-group-flush` prop.
     */
    listGroupFlush?: boolean
    /**
     * Add Bootstrap's `.list-group-item-primary` class to the element. Alias for `list-group-item-primary` prop.
     */
    listGroupItemPrimary?: boolean
    /**
     * Add Bootstrap's `.list-group-item-secondary` class to the element. Alias for `list-group-item-secondary` prop.
     */
    listGroupItemSecondary?: boolean
    /**
     * Add Bootstrap's `.list-group-item-success` class to the element. Alias for `list-group-item-success` prop.
     */
    listGroupItemSuccess?: boolean
    /**
     * Add Bootstrap's `.list-group-item-info` class to the element. Alias for `list-group-item-info` prop.
     */
    listGroupItemInfo?: boolean
    /**
     * Add Bootstrap's `.list-group-item-warning` class to the element. Alias for `list-group-item-warning` prop.
     */
    listGroupItemWarning?: boolean
    /**
     * Add Bootstrap's `.list-group-item-danger` class to the element. Alias for `list-group-item-danger` prop.
     */
    listGroupItemDanger?: boolean
    /**
     * Add Bootstrap's `.list-group-item-light` class to the element. Alias for `list-group-item-light` prop.
     */
    listGroupItemLight?: boolean
    /**
     * Add Bootstrap's `.list-group-item-dark` class to the element. Alias for `list-group-item-dark` prop.
     */
    listGroupItemDark?: boolean
    /**
     * Add Bootstrap's `.toast-header` class to the element. Alias for `toast-header` prop.
     */
    toastHeader?: boolean
    /**
     * Add Bootstrap's `.toast-body` class to the element. Alias for `toast-body` prop.
     */
    toastBody?: boolean
    /**
     * Add Bootstrap's `.modal-open` class to the element. Alias for `modal-open` prop.
     */
    modalOpen?: boolean
    /**
     * Add Bootstrap's `.modal-dialog` class to the element. Alias for `modal-dialog` prop.
     */
    modalDialog?: boolean
    /**
     * Add Bootstrap's `.modal-static` class to the element. Alias for `modal-static` prop.
     */
    modalStatic?: boolean
    /**
     * Add Bootstrap's `.modal-dialog-scrollable` class to the element. Alias for `modal-dialog-scrollable` prop.
     */
    modalDialogScrollable?: boolean
    /**
     * Add Bootstrap's `.modal-content` class to the element. Alias for `modal-content` prop.
     */
    modalContent?: boolean
    /**
     * Add Bootstrap's `.modal-header` class to the element. Alias for `modal-header` prop.
     */
    modalHeader?: boolean
    /**
     * Add Bootstrap's `.modal-footer` class to the element. Alias for `modal-footer` prop.
     */
    modalFooter?: boolean
    /**
     * Add Bootstrap's `.modal-body` class to the element. Alias for `modal-body` prop.
     */
    modalBody?: boolean
    /**
     * Add Bootstrap's `.modal-dialog-centered` class to the element. Alias for `modal-dialog-centered` prop.
     */
    modalDialogCentered?: boolean
    /**
     * Add Bootstrap's `.modal-backdrop` class to the element. Alias for `modal-backdrop` prop.
     */
    modalBackdrop?: boolean
    /**
     * Add Bootstrap's `.modal-title` class to the element. Alias for `modal-title` prop.
     */
    modalTitle?: boolean
    /**
     * Add Bootstrap's `.modal-scrollbar-measure` class to the element. Alias for `modal-scrollbar-measure` prop.
     */
    modalScrollbarMeasure?: boolean
    /**
     * Add Bootstrap's `.modal-sm` class to the element. Alias for `modal-sm` prop.
     */
    modalSm?: boolean
    /**
     * Add Bootstrap's `.modal-lg` class to the element. Alias for `modal-lg` prop.
     */
    modalLg?: boolean
    /**
     * Add Bootstrap's `.modal-xl` class to the element. Alias for `modal-xl` prop.
     */
    modalXl?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-top` class to the element. Alias for `bs-tooltip-top` prop.
     */
    bsTooltipTop?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-auto` class to the element. Alias for `bs-tooltip-auto` prop.
     */
    bsTooltipAuto?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-right` class to the element. Alias for `bs-tooltip-right` prop.
     */
    bsTooltipRight?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-bottom` class to the element. Alias for `bs-tooltip-bottom` prop.
     */
    bsTooltipBottom?: boolean
    /**
     * Add Bootstrap's `.bs-tooltip-left` class to the element. Alias for `bs-tooltip-left` prop.
     */
    bsTooltipLeft?: boolean
    /**
     * Add Bootstrap's `.tooltip-inner` class to the element. Alias for `tooltip-inner` prop.
     */
    tooltipInner?: boolean
    /**
     * Add Bootstrap's `.bs-popover-top` class to the element. Alias for `bs-popover-top` prop.
     */
    bsPopoverTop?: boolean
    /**
     * Add Bootstrap's `.bs-popover-auto` class to the element. Alias for `bs-popover-auto` prop.
     */
    bsPopoverAuto?: boolean
    /**
     * Add Bootstrap's `.bs-popover-right` class to the element. Alias for `bs-popover-right` prop.
     */
    bsPopoverRight?: boolean
    /**
     * Add Bootstrap's `.bs-popover-bottom` class to the element. Alias for `bs-popover-bottom` prop.
     */
    bsPopoverBottom?: boolean
    /**
     * Add Bootstrap's `.popover-header` class to the element. Alias for `popover-header` prop.
     */
    popoverHeader?: boolean
    /**
     * Add Bootstrap's `.bs-popover-left` class to the element. Alias for `bs-popover-left` prop.
     */
    bsPopoverLeft?: boolean
    /**
     * Add Bootstrap's `.popover-body` class to the element. Alias for `popover-body` prop.
     */
    popoverBody?: boolean
    /**
     * Add Bootstrap's `.pointer-event` class to the element. Alias for `pointer-event` prop.
     */
    pointerEvent?: boolean
    /**
     * Add Bootstrap's `.carousel-inner` class to the element. Alias for `carousel-inner` prop.
     */
    carouselInner?: boolean
    /**
     * Add Bootstrap's `.carousel-item` class to the element. Alias for `carousel-item` prop.
     */
    carouselItem?: boolean
    /**
     * Add Bootstrap's `.carousel-item-next` class to the element. Alias for `carousel-item-next` prop.
     */
    carouselItemNext?: boolean
    /**
     * Add Bootstrap's `.carousel-item-prev` class to the element. Alias for `carousel-item-prev` prop.
     */
    carouselItemPrev?: boolean
    /**
     * Add Bootstrap's `.carousel-item-left` class to the element. Alias for `carousel-item-left` prop.
     */
    carouselItemLeft?: boolean
    /**
     * Add Bootstrap's `.carousel-item-right` class to the element. Alias for `carousel-item-right` prop.
     */
    carouselItemRight?: boolean
    /**
     * Add Bootstrap's `.carousel-fade` class to the element. Alias for `carousel-fade` prop.
     */
    carouselFade?: boolean
    /**
     * Add Bootstrap's `.carousel-control-prev` class to the element. Alias for `carousel-control-prev` prop.
     */
    carouselControlPrev?: boolean
    /**
     * Add Bootstrap's `.carousel-control-next` class to the element. Alias for `carousel-control-next` prop.
     */
    carouselControlNext?: boolean
    /**
     * Add Bootstrap's `.carousel-control-prev-icon` class to the element. Alias for `carousel-control-prev-icon` prop.
     */
    carouselControlPrevIcon?: boolean
    /**
     * Add Bootstrap's `.carousel-control-next-icon` class to the element. Alias for `carousel-control-next-icon` prop.
     */
    carouselControlNextIcon?: boolean
    /**
     * Add Bootstrap's `.carousel-indicators` class to the element. Alias for `carousel-indicators` prop.
     */
    carouselIndicators?: boolean
    /**
     * Add Bootstrap's `.carousel-caption` class to the element. Alias for `carousel-caption` prop.
     */
    carouselCaption?: boolean
    /**
     * Add Bootstrap's `.spinner-border` class to the element. Alias for `spinner-border` prop.
     */
    spinnerBorder?: boolean
    /**
     * Add Bootstrap's `.spinner-border-sm` class to the element. Alias for `spinner-border-sm` prop.
     */
    spinnerBorderSm?: boolean
    /**
     * Add Bootstrap's `.spinner-grow` class to the element. Alias for `spinner-grow` prop.
     */
    spinnerGrow?: boolean
    /**
     * Add Bootstrap's `.spinner-grow-sm` class to the element. Alias for `spinner-grow-sm` prop.
     */
    spinnerGrowSm?: boolean
    /**
     * Add Bootstrap's `.align-baseline` class to the element. Alias for `align-baseline` prop.
     */
    alignBaseline?: boolean
    /**
     * Add Bootstrap's `.align-top` class to the element. Alias for `align-top` prop.
     */
    alignTop?: boolean
    /**
     * Add Bootstrap's `.align-middle` class to the element. Alias for `align-middle` prop.
     */
    alignMiddle?: boolean
    /**
     * Add Bootstrap's `.align-bottom` class to the element. Alias for `align-bottom` prop.
     */
    alignBottom?: boolean
    /**
     * Add Bootstrap's `.align-text-bottom` class to the element. Alias for `align-text-bottom` prop.
     */
    alignTextBottom?: boolean
    /**
     * Add Bootstrap's `.align-text-top` class to the element. Alias for `align-text-top` prop.
     */
    alignTextTop?: boolean
    /**
     * Add Bootstrap's `.bg-primary` class to the element. Alias for `bg-primary` prop.
     */
    bgPrimary?: boolean
    /**
     * Add Bootstrap's `.bg-secondary` class to the element. Alias for `bg-secondary` prop.
     */
    bgSecondary?: boolean
    /**
     * Add Bootstrap's `.bg-success` class to the element. Alias for `bg-success` prop.
     */
    bgSuccess?: boolean
    /**
     * Add Bootstrap's `.bg-info` class to the element. Alias for `bg-info` prop.
     */
    bgInfo?: boolean
    /**
     * Add Bootstrap's `.bg-warning` class to the element. Alias for `bg-warning` prop.
     */
    bgWarning?: boolean
    /**
     * Add Bootstrap's `.bg-danger` class to the element. Alias for `bg-danger` prop.
     */
    bgDanger?: boolean
    /**
     * Add Bootstrap's `.bg-light` class to the element. Alias for `bg-light` prop.
     */
    bgLight?: boolean
    /**
     * Add Bootstrap's `.bg-dark` class to the element. Alias for `bg-dark` prop.
     */
    bgDark?: boolean
    /**
     * Add Bootstrap's `.bg-white` class to the element. Alias for `bg-white` prop.
     */
    bgWhite?: boolean
    /**
     * Add Bootstrap's `.bg-transparent` class to the element. Alias for `bg-transparent` prop.
     */
    bgTransparent?: boolean
    /**
     * Add Bootstrap's `.border-top` class to the element. Alias for `border-top` prop.
     */
    borderTop?: boolean
    /**
     * Add Bootstrap's `.border-right` class to the element. Alias for `border-right` prop.
     */
    borderRight?: boolean
    /**
     * Add Bootstrap's `.border-bottom` class to the element. Alias for `border-bottom` prop.
     */
    borderBottom?: boolean
    /**
     * Add Bootstrap's `.border-left` class to the element. Alias for `border-left` prop.
     */
    borderLeft?: boolean
    /**
     * Add Bootstrap's `.border-0` class to the element. Alias for `border-0` prop.
     */
    border0?: boolean
    /**
     * Add Bootstrap's `.border-top-0` class to the element. Alias for `border-top-0` prop.
     */
    borderTop0?: boolean
    /**
     * Add Bootstrap's `.border-right-0` class to the element. Alias for `border-right-0` prop.
     */
    borderRight0?: boolean
    /**
     * Add Bootstrap's `.border-bottom-0` class to the element. Alias for `border-bottom-0` prop.
     */
    borderBottom0?: boolean
    /**
     * Add Bootstrap's `.border-left-0` class to the element. Alias for `border-left-0` prop.
     */
    borderLeft0?: boolean
    /**
     * Add Bootstrap's `.border-primary` class to the element. Alias for `border-primary` prop.
     */
    borderPrimary?: boolean
    /**
     * Add Bootstrap's `.border-secondary` class to the element. Alias for `border-secondary` prop.
     */
    borderSecondary?: boolean
    /**
     * Add Bootstrap's `.border-success` class to the element. Alias for `border-success` prop.
     */
    borderSuccess?: boolean
    /**
     * Add Bootstrap's `.border-info` class to the element. Alias for `border-info` prop.
     */
    borderInfo?: boolean
    /**
     * Add Bootstrap's `.border-warning` class to the element. Alias for `border-warning` prop.
     */
    borderWarning?: boolean
    /**
     * Add Bootstrap's `.border-danger` class to the element. Alias for `border-danger` prop.
     */
    borderDanger?: boolean
    /**
     * Add Bootstrap's `.border-light` class to the element. Alias for `border-light` prop.
     */
    borderLight?: boolean
    /**
     * Add Bootstrap's `.border-dark` class to the element. Alias for `border-dark` prop.
     */
    borderDark?: boolean
    /**
     * Add Bootstrap's `.border-white` class to the element. Alias for `border-white` prop.
     */
    borderWhite?: boolean
    /**
     * Add Bootstrap's `.rounded-sm` class to the element. Alias for `rounded-sm` prop.
     */
    roundedSm?: boolean
    /**
     * Add Bootstrap's `.rounded-top` class to the element. Alias for `rounded-top` prop.
     */
    roundedTop?: boolean
    /**
     * Add Bootstrap's `.rounded-right` class to the element. Alias for `rounded-right` prop.
     */
    roundedRight?: boolean
    /**
     * Add Bootstrap's `.rounded-bottom` class to the element. Alias for `rounded-bottom` prop.
     */
    roundedBottom?: boolean
    /**
     * Add Bootstrap's `.rounded-left` class to the element. Alias for `rounded-left` prop.
     */
    roundedLeft?: boolean
    /**
     * Add Bootstrap's `.rounded-lg` class to the element. Alias for `rounded-lg` prop.
     */
    roundedLg?: boolean
    /**
     * Add Bootstrap's `.rounded-circle` class to the element. Alias for `rounded-circle` prop.
     */
    roundedCircle?: boolean
    /**
     * Add Bootstrap's `.rounded-pill` class to the element. Alias for `rounded-pill` prop.
     */
    roundedPill?: boolean
    /**
     * Add Bootstrap's `.rounded-0` class to the element. Alias for `rounded-0` prop.
     */
    rounded0?: boolean
    /**
     * Add Bootstrap's `.d-none` class to the element. Alias for `d-none` prop.
     */
    dNone?: boolean
    /**
     * Add Bootstrap's `.d-inline` class to the element. Alias for `d-inline` prop.
     */
    dInline?: boolean
    /**
     * Add Bootstrap's `.d-inline-block` class to the element. Alias for `d-inline-block` prop.
     */
    dInlineBlock?: boolean
    /**
     * Add Bootstrap's `.d-block` class to the element. Alias for `d-block` prop.
     */
    dBlock?: boolean
    /**
     * Add Bootstrap's `.d-table` class to the element. Alias for `d-table` prop.
     */
    dTable?: boolean
    /**
     * Add Bootstrap's `.d-table-row` class to the element. Alias for `d-table-row` prop.
     */
    dTableRow?: boolean
    /**
     * Add Bootstrap's `.d-table-cell` class to the element. Alias for `d-table-cell` prop.
     */
    dTableCell?: boolean
    /**
     * Add Bootstrap's `.d-flex` class to the element. Alias for `d-flex` prop.
     */
    dFlex?: boolean
    /**
     * Add Bootstrap's `.d-inline-flex` class to the element. Alias for `d-inline-flex` prop.
     */
    dInlineFlex?: boolean
    /**
     * Add Bootstrap's `.d-sm-none` class to the element. Alias for `d-sm-none` prop.
     */
    dSmNone?: boolean
    /**
     * Add Bootstrap's `.d-sm-inline` class to the element. Alias for `d-sm-inline` prop.
     */
    dSmInline?: boolean
    /**
     * Add Bootstrap's `.d-sm-inline-block` class to the element. Alias for `d-sm-inline-block` prop.
     */
    dSmInlineBlock?: boolean
    /**
     * Add Bootstrap's `.d-sm-block` class to the element. Alias for `d-sm-block` prop.
     */
    dSmBlock?: boolean
    /**
     * Add Bootstrap's `.d-sm-table` class to the element. Alias for `d-sm-table` prop.
     */
    dSmTable?: boolean
    /**
     * Add Bootstrap's `.d-sm-table-row` class to the element. Alias for `d-sm-table-row` prop.
     */
    dSmTableRow?: boolean
    /**
     * Add Bootstrap's `.d-sm-table-cell` class to the element. Alias for `d-sm-table-cell` prop.
     */
    dSmTableCell?: boolean
    /**
     * Add Bootstrap's `.d-sm-flex` class to the element. Alias for `d-sm-flex` prop.
     */
    dSmFlex?: boolean
    /**
     * Add Bootstrap's `.d-sm-inline-flex` class to the element. Alias for `d-sm-inline-flex` prop.
     */
    dSmInlineFlex?: boolean
    /**
     * Add Bootstrap's `.d-md-none` class to the element. Alias for `d-md-none` prop.
     */
    dMdNone?: boolean
    /**
     * Add Bootstrap's `.d-md-inline` class to the element. Alias for `d-md-inline` prop.
     */
    dMdInline?: boolean
    /**
     * Add Bootstrap's `.d-md-inline-block` class to the element. Alias for `d-md-inline-block` prop.
     */
    dMdInlineBlock?: boolean
    /**
     * Add Bootstrap's `.d-md-block` class to the element. Alias for `d-md-block` prop.
     */
    dMdBlock?: boolean
    /**
     * Add Bootstrap's `.d-md-table` class to the element. Alias for `d-md-table` prop.
     */
    dMdTable?: boolean
    /**
     * Add Bootstrap's `.d-md-table-row` class to the element. Alias for `d-md-table-row` prop.
     */
    dMdTableRow?: boolean
    /**
     * Add Bootstrap's `.d-md-table-cell` class to the element. Alias for `d-md-table-cell` prop.
     */
    dMdTableCell?: boolean
    /**
     * Add Bootstrap's `.d-md-flex` class to the element. Alias for `d-md-flex` prop.
     */
    dMdFlex?: boolean
    /**
     * Add Bootstrap's `.d-md-inline-flex` class to the element. Alias for `d-md-inline-flex` prop.
     */
    dMdInlineFlex?: boolean
    /**
     * Add Bootstrap's `.d-lg-none` class to the element. Alias for `d-lg-none` prop.
     */
    dLgNone?: boolean
    /**
     * Add Bootstrap's `.d-lg-inline` class to the element. Alias for `d-lg-inline` prop.
     */
    dLgInline?: boolean
    /**
     * Add Bootstrap's `.d-lg-inline-block` class to the element. Alias for `d-lg-inline-block` prop.
     */
    dLgInlineBlock?: boolean
    /**
     * Add Bootstrap's `.d-lg-block` class to the element. Alias for `d-lg-block` prop.
     */
    dLgBlock?: boolean
    /**
     * Add Bootstrap's `.d-lg-table` class to the element. Alias for `d-lg-table` prop.
     */
    dLgTable?: boolean
    /**
     * Add Bootstrap's `.d-lg-table-row` class to the element. Alias for `d-lg-table-row` prop.
     */
    dLgTableRow?: boolean
    /**
     * Add Bootstrap's `.d-lg-table-cell` class to the element. Alias for `d-lg-table-cell` prop.
     */
    dLgTableCell?: boolean
    /**
     * Add Bootstrap's `.d-lg-flex` class to the element. Alias for `d-lg-flex` prop.
     */
    dLgFlex?: boolean
    /**
     * Add Bootstrap's `.d-lg-inline-flex` class to the element. Alias for `d-lg-inline-flex` prop.
     */
    dLgInlineFlex?: boolean
    /**
     * Add Bootstrap's `.d-xl-none` class to the element. Alias for `d-xl-none` prop.
     */
    dXlNone?: boolean
    /**
     * Add Bootstrap's `.d-xl-inline` class to the element. Alias for `d-xl-inline` prop.
     */
    dXlInline?: boolean
    /**
     * Add Bootstrap's `.d-xl-inline-block` class to the element. Alias for `d-xl-inline-block` prop.
     */
    dXlInlineBlock?: boolean
    /**
     * Add Bootstrap's `.d-xl-block` class to the element. Alias for `d-xl-block` prop.
     */
    dXlBlock?: boolean
    /**
     * Add Bootstrap's `.d-xl-table` class to the element. Alias for `d-xl-table` prop.
     */
    dXlTable?: boolean
    /**
     * Add Bootstrap's `.d-xl-table-row` class to the element. Alias for `d-xl-table-row` prop.
     */
    dXlTableRow?: boolean
    /**
     * Add Bootstrap's `.d-xl-table-cell` class to the element. Alias for `d-xl-table-cell` prop.
     */
    dXlTableCell?: boolean
    /**
     * Add Bootstrap's `.d-xl-flex` class to the element. Alias for `d-xl-flex` prop.
     */
    dXlFlex?: boolean
    /**
     * Add Bootstrap's `.d-xl-inline-flex` class to the element. Alias for `d-xl-inline-flex` prop.
     */
    dXlInlineFlex?: boolean
    /**
     * Add Bootstrap's `.d-print-none` class to the element. Alias for `d-print-none` prop.
     */
    dPrintNone?: boolean
    /**
     * Add Bootstrap's `.d-print-inline` class to the element. Alias for `d-print-inline` prop.
     */
    dPrintInline?: boolean
    /**
     * Add Bootstrap's `.d-print-inline-block` class to the element. Alias for `d-print-inline-block` prop.
     */
    dPrintInlineBlock?: boolean
    /**
     * Add Bootstrap's `.d-print-block` class to the element. Alias for `d-print-block` prop.
     */
    dPrintBlock?: boolean
    /**
     * Add Bootstrap's `.d-print-table` class to the element. Alias for `d-print-table` prop.
     */
    dPrintTable?: boolean
    /**
     * Add Bootstrap's `.d-print-table-row` class to the element. Alias for `d-print-table-row` prop.
     */
    dPrintTableRow?: boolean
    /**
     * Add Bootstrap's `.d-print-table-cell` class to the element. Alias for `d-print-table-cell` prop.
     */
    dPrintTableCell?: boolean
    /**
     * Add Bootstrap's `.d-print-flex` class to the element. Alias for `d-print-flex` prop.
     */
    dPrintFlex?: boolean
    /**
     * Add Bootstrap's `.d-print-inline-flex` class to the element. Alias for `d-print-inline-flex` prop.
     */
    dPrintInlineFlex?: boolean
    /**
     * Add Bootstrap's `.embed-responsive` class to the element. Alias for `embed-responsive` prop.
     */
    embedResponsive?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-item` class to the element. Alias for `embed-responsive-item` prop.
     */
    embedResponsiveItem?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-21by9` class to the element. Alias for `embed-responsive-21by9` prop.
     */
    embedResponsive21by9?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-16by9` class to the element. Alias for `embed-responsive-16by9` prop.
     */
    embedResponsive16by9?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-4by3` class to the element. Alias for `embed-responsive-4by3` prop.
     */
    embedResponsive4by3?: boolean
    /**
     * Add Bootstrap's `.embed-responsive-1by1` class to the element. Alias for `embed-responsive-1by1` prop.
     */
    embedResponsive1by1?: boolean
    /**
     * Add Bootstrap's `.flex-row` class to the element. Alias for `flex-row` prop.
     */
    flexRow?: boolean
    /**
     * Add Bootstrap's `.flex-column` class to the element. Alias for `flex-column` prop.
     */
    flexColumn?: boolean
    /**
     * Add Bootstrap's `.flex-row-reverse` class to the element. Alias for `flex-row-reverse` prop.
     */
    flexRowReverse?: boolean
    /**
     * Add Bootstrap's `.flex-column-reverse` class to the element. Alias for `flex-column-reverse` prop.
     */
    flexColumnReverse?: boolean
    /**
     * Add Bootstrap's `.flex-wrap` class to the element. Alias for `flex-wrap` prop.
     */
    flexWrap?: boolean
    /**
     * Add Bootstrap's `.flex-nowrap` class to the element. Alias for `flex-nowrap` prop.
     */
    flexNowrap?: boolean
    /**
     * Add Bootstrap's `.flex-wrap-reverse` class to the element. Alias for `flex-wrap-reverse` prop.
     */
    flexWrapReverse?: boolean
    /**
     * Add Bootstrap's `.flex-fill` class to the element. Alias for `flex-fill` prop.
     */
    flexFill?: boolean
    /**
     * Add Bootstrap's `.flex-grow-0` class to the element. Alias for `flex-grow-0` prop.
     */
    flexGrow0?: boolean
    /**
     * Add Bootstrap's `.flex-grow-1` class to the element. Alias for `flex-grow-1` prop.
     */
    flexGrow1?: boolean
    /**
     * Add Bootstrap's `.flex-shrink-0` class to the element. Alias for `flex-shrink-0` prop.
     */
    flexShrink0?: boolean
    /**
     * Add Bootstrap's `.flex-shrink-1` class to the element. Alias for `flex-shrink-1` prop.
     */
    flexShrink1?: boolean
    /**
     * Add Bootstrap's `.justify-content-start` class to the element. Alias for `justify-content-start` prop.
     */
    justifyContentStart?: boolean
    /**
     * Add Bootstrap's `.justify-content-end` class to the element. Alias for `justify-content-end` prop.
     */
    justifyContentEnd?: boolean
    /**
     * Add Bootstrap's `.justify-content-center` class to the element. Alias for `justify-content-center` prop.
     */
    justifyContentCenter?: boolean
    /**
     * Add Bootstrap's `.justify-content-between` class to the element. Alias for `justify-content-between` prop.
     */
    justifyContentBetween?: boolean
    /**
     * Add Bootstrap's `.justify-content-around` class to the element. Alias for `justify-content-around` prop.
     */
    justifyContentAround?: boolean
    /**
     * Add Bootstrap's `.align-items-start` class to the element. Alias for `align-items-start` prop.
     */
    alignItemsStart?: boolean
    /**
     * Add Bootstrap's `.align-items-end` class to the element. Alias for `align-items-end` prop.
     */
    alignItemsEnd?: boolean
    /**
     * Add Bootstrap's `.align-items-center` class to the element. Alias for `align-items-center` prop.
     */
    alignItemsCenter?: boolean
    /**
     * Add Bootstrap's `.align-items-baseline` class to the element. Alias for `align-items-baseline` prop.
     */
    alignItemsBaseline?: boolean
    /**
     * Add Bootstrap's `.align-items-stretch` class to the element. Alias for `align-items-stretch` prop.
     */
    alignItemsStretch?: boolean
    /**
     * Add Bootstrap's `.align-content-start` class to the element. Alias for `align-content-start` prop.
     */
    alignContentStart?: boolean
    /**
     * Add Bootstrap's `.align-content-end` class to the element. Alias for `align-content-end` prop.
     */
    alignContentEnd?: boolean
    /**
     * Add Bootstrap's `.align-content-center` class to the element. Alias for `align-content-center` prop.
     */
    alignContentCenter?: boolean
    /**
     * Add Bootstrap's `.align-content-between` class to the element. Alias for `align-content-between` prop.
     */
    alignContentBetween?: boolean
    /**
     * Add Bootstrap's `.align-content-around` class to the element. Alias for `align-content-around` prop.
     */
    alignContentAround?: boolean
    /**
     * Add Bootstrap's `.align-content-stretch` class to the element. Alias for `align-content-stretch` prop.
     */
    alignContentStretch?: boolean
    /**
     * Add Bootstrap's `.align-self-auto` class to the element. Alias for `align-self-auto` prop.
     */
    alignSelfAuto?: boolean
    /**
     * Add Bootstrap's `.align-self-start` class to the element. Alias for `align-self-start` prop.
     */
    alignSelfStart?: boolean
    /**
     * Add Bootstrap's `.align-self-end` class to the element. Alias for `align-self-end` prop.
     */
    alignSelfEnd?: boolean
    /**
     * Add Bootstrap's `.align-self-center` class to the element. Alias for `align-self-center` prop.
     */
    alignSelfCenter?: boolean
    /**
     * Add Bootstrap's `.align-self-baseline` class to the element. Alias for `align-self-baseline` prop.
     */
    alignSelfBaseline?: boolean
    /**
     * Add Bootstrap's `.align-self-stretch` class to the element. Alias for `align-self-stretch` prop.
     */
    alignSelfStretch?: boolean
    /**
     * Add Bootstrap's `.flex-sm-row` class to the element. Alias for `flex-sm-row` prop.
     */
    flexSmRow?: boolean
    /**
     * Add Bootstrap's `.flex-sm-column` class to the element. Alias for `flex-sm-column` prop.
     */
    flexSmColumn?: boolean
    /**
     * Add Bootstrap's `.flex-sm-row-reverse` class to the element. Alias for `flex-sm-row-reverse` prop.
     */
    flexSmRowReverse?: boolean
    /**
     * Add Bootstrap's `.flex-sm-column-reverse` class to the element. Alias for `flex-sm-column-reverse` prop.
     */
    flexSmColumnReverse?: boolean
    /**
     * Add Bootstrap's `.flex-sm-wrap` class to the element. Alias for `flex-sm-wrap` prop.
     */
    flexSmWrap?: boolean
    /**
     * Add Bootstrap's `.flex-sm-nowrap` class to the element. Alias for `flex-sm-nowrap` prop.
     */
    flexSmNowrap?: boolean
    /**
     * Add Bootstrap's `.flex-sm-wrap-reverse` class to the element. Alias for `flex-sm-wrap-reverse` prop.
     */
    flexSmWrapReverse?: boolean
    /**
     * Add Bootstrap's `.flex-sm-fill` class to the element. Alias for `flex-sm-fill` prop.
     */
    flexSmFill?: boolean
    /**
     * Add Bootstrap's `.flex-sm-grow-0` class to the element. Alias for `flex-sm-grow-0` prop.
     */
    flexSmGrow0?: boolean
    /**
     * Add Bootstrap's `.flex-sm-grow-1` class to the element. Alias for `flex-sm-grow-1` prop.
     */
    flexSmGrow1?: boolean
    /**
     * Add Bootstrap's `.flex-sm-shrink-0` class to the element. Alias for `flex-sm-shrink-0` prop.
     */
    flexSmShrink0?: boolean
    /**
     * Add Bootstrap's `.flex-sm-shrink-1` class to the element. Alias for `flex-sm-shrink-1` prop.
     */
    flexSmShrink1?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-start` class to the element. Alias for `justify-content-sm-start` prop.
     */
    justifyContentSmStart?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-end` class to the element. Alias for `justify-content-sm-end` prop.
     */
    justifyContentSmEnd?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-center` class to the element. Alias for `justify-content-sm-center` prop.
     */
    justifyContentSmCenter?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-between` class to the element. Alias for `justify-content-sm-between` prop.
     */
    justifyContentSmBetween?: boolean
    /**
     * Add Bootstrap's `.justify-content-sm-around` class to the element. Alias for `justify-content-sm-around` prop.
     */
    justifyContentSmAround?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-start` class to the element. Alias for `align-items-sm-start` prop.
     */
    alignItemsSmStart?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-end` class to the element. Alias for `align-items-sm-end` prop.
     */
    alignItemsSmEnd?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-center` class to the element. Alias for `align-items-sm-center` prop.
     */
    alignItemsSmCenter?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-baseline` class to the element. Alias for `align-items-sm-baseline` prop.
     */
    alignItemsSmBaseline?: boolean
    /**
     * Add Bootstrap's `.align-items-sm-stretch` class to the element. Alias for `align-items-sm-stretch` prop.
     */
    alignItemsSmStretch?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-start` class to the element. Alias for `align-content-sm-start` prop.
     */
    alignContentSmStart?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-end` class to the element. Alias for `align-content-sm-end` prop.
     */
    alignContentSmEnd?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-center` class to the element. Alias for `align-content-sm-center` prop.
     */
    alignContentSmCenter?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-between` class to the element. Alias for `align-content-sm-between` prop.
     */
    alignContentSmBetween?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-around` class to the element. Alias for `align-content-sm-around` prop.
     */
    alignContentSmAround?: boolean
    /**
     * Add Bootstrap's `.align-content-sm-stretch` class to the element. Alias for `align-content-sm-stretch` prop.
     */
    alignContentSmStretch?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-auto` class to the element. Alias for `align-self-sm-auto` prop.
     */
    alignSelfSmAuto?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-start` class to the element. Alias for `align-self-sm-start` prop.
     */
    alignSelfSmStart?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-end` class to the element. Alias for `align-self-sm-end` prop.
     */
    alignSelfSmEnd?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-center` class to the element. Alias for `align-self-sm-center` prop.
     */
    alignSelfSmCenter?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-baseline` class to the element. Alias for `align-self-sm-baseline` prop.
     */
    alignSelfSmBaseline?: boolean
    /**
     * Add Bootstrap's `.align-self-sm-stretch` class to the element. Alias for `align-self-sm-stretch` prop.
     */
    alignSelfSmStretch?: boolean
    /**
     * Add Bootstrap's `.flex-md-row` class to the element. Alias for `flex-md-row` prop.
     */
    flexMdRow?: boolean
    /**
     * Add Bootstrap's `.flex-md-column` class to the element. Alias for `flex-md-column` prop.
     */
    flexMdColumn?: boolean
    /**
     * Add Bootstrap's `.flex-md-row-reverse` class to the element. Alias for `flex-md-row-reverse` prop.
     */
    flexMdRowReverse?: boolean
    /**
     * Add Bootstrap's `.flex-md-column-reverse` class to the element. Alias for `flex-md-column-reverse` prop.
     */
    flexMdColumnReverse?: boolean
    /**
     * Add Bootstrap's `.flex-md-wrap` class to the element. Alias for `flex-md-wrap` prop.
     */
    flexMdWrap?: boolean
    /**
     * Add Bootstrap's `.flex-md-nowrap` class to the element. Alias for `flex-md-nowrap` prop.
     */
    flexMdNowrap?: boolean
    /**
     * Add Bootstrap's `.flex-md-wrap-reverse` class to the element. Alias for `flex-md-wrap-reverse` prop.
     */
    flexMdWrapReverse?: boolean
    /**
     * Add Bootstrap's `.flex-md-fill` class to the element. Alias for `flex-md-fill` prop.
     */
    flexMdFill?: boolean
    /**
     * Add Bootstrap's `.flex-md-grow-0` class to the element. Alias for `flex-md-grow-0` prop.
     */
    flexMdGrow0?: boolean
    /**
     * Add Bootstrap's `.flex-md-grow-1` class to the element. Alias for `flex-md-grow-1` prop.
     */
    flexMdGrow1?: boolean
    /**
     * Add Bootstrap's `.flex-md-shrink-0` class to the element. Alias for `flex-md-shrink-0` prop.
     */
    flexMdShrink0?: boolean
    /**
     * Add Bootstrap's `.flex-md-shrink-1` class to the element. Alias for `flex-md-shrink-1` prop.
     */
    flexMdShrink1?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-start` class to the element. Alias for `justify-content-md-start` prop.
     */
    justifyContentMdStart?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-end` class to the element. Alias for `justify-content-md-end` prop.
     */
    justifyContentMdEnd?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-center` class to the element. Alias for `justify-content-md-center` prop.
     */
    justifyContentMdCenter?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-between` class to the element. Alias for `justify-content-md-between` prop.
     */
    justifyContentMdBetween?: boolean
    /**
     * Add Bootstrap's `.justify-content-md-around` class to the element. Alias for `justify-content-md-around` prop.
     */
    justifyContentMdAround?: boolean
    /**
     * Add Bootstrap's `.align-items-md-start` class to the element. Alias for `align-items-md-start` prop.
     */
    alignItemsMdStart?: boolean
    /**
     * Add Bootstrap's `.align-items-md-end` class to the element. Alias for `align-items-md-end` prop.
     */
    alignItemsMdEnd?: boolean
    /**
     * Add Bootstrap's `.align-items-md-center` class to the element. Alias for `align-items-md-center` prop.
     */
    alignItemsMdCenter?: boolean
    /**
     * Add Bootstrap's `.align-items-md-baseline` class to the element. Alias for `align-items-md-baseline` prop.
     */
    alignItemsMdBaseline?: boolean
    /**
     * Add Bootstrap's `.align-items-md-stretch` class to the element. Alias for `align-items-md-stretch` prop.
     */
    alignItemsMdStretch?: boolean
    /**
     * Add Bootstrap's `.align-content-md-start` class to the element. Alias for `align-content-md-start` prop.
     */
    alignContentMdStart?: boolean
    /**
     * Add Bootstrap's `.align-content-md-end` class to the element. Alias for `align-content-md-end` prop.
     */
    alignContentMdEnd?: boolean
    /**
     * Add Bootstrap's `.align-content-md-center` class to the element. Alias for `align-content-md-center` prop.
     */
    alignContentMdCenter?: boolean
    /**
     * Add Bootstrap's `.align-content-md-between` class to the element. Alias for `align-content-md-between` prop.
     */
    alignContentMdBetween?: boolean
    /**
     * Add Bootstrap's `.align-content-md-around` class to the element. Alias for `align-content-md-around` prop.
     */
    alignContentMdAround?: boolean
    /**
     * Add Bootstrap's `.align-content-md-stretch` class to the element. Alias for `align-content-md-stretch` prop.
     */
    alignContentMdStretch?: boolean
    /**
     * Add Bootstrap's `.align-self-md-auto` class to the element. Alias for `align-self-md-auto` prop.
     */
    alignSelfMdAuto?: boolean
    /**
     * Add Bootstrap's `.align-self-md-start` class to the element. Alias for `align-self-md-start` prop.
     */
    alignSelfMdStart?: boolean
    /**
     * Add Bootstrap's `.align-self-md-end` class to the element. Alias for `align-self-md-end` prop.
     */
    alignSelfMdEnd?: boolean
    /**
     * Add Bootstrap's `.align-self-md-center` class to the element. Alias for `align-self-md-center` prop.
     */
    alignSelfMdCenter?: boolean
    /**
     * Add Bootstrap's `.align-self-md-baseline` class to the element. Alias for `align-self-md-baseline` prop.
     */
    alignSelfMdBaseline?: boolean
    /**
     * Add Bootstrap's `.align-self-md-stretch` class to the element. Alias for `align-self-md-stretch` prop.
     */
    alignSelfMdStretch?: boolean
    /**
     * Add Bootstrap's `.flex-lg-row` class to the element. Alias for `flex-lg-row` prop.
     */
    flexLgRow?: boolean
    /**
     * Add Bootstrap's `.flex-lg-column` class to the element. Alias for `flex-lg-column` prop.
     */
    flexLgColumn?: boolean
    /**
     * Add Bootstrap's `.flex-lg-row-reverse` class to the element. Alias for `flex-lg-row-reverse` prop.
     */
    flexLgRowReverse?: boolean
    /**
     * Add Bootstrap's `.flex-lg-column-reverse` class to the element. Alias for `flex-lg-column-reverse` prop.
     */
    flexLgColumnReverse?: boolean
    /**
     * Add Bootstrap's `.flex-lg-wrap` class to the element. Alias for `flex-lg-wrap` prop.
     */
    flexLgWrap?: boolean
    /**
     * Add Bootstrap's `.flex-lg-nowrap` class to the element. Alias for `flex-lg-nowrap` prop.
     */
    flexLgNowrap?: boolean
    /**
     * Add Bootstrap's `.flex-lg-wrap-reverse` class to the element. Alias for `flex-lg-wrap-reverse` prop.
     */
    flexLgWrapReverse?: boolean
    /**
     * Add Bootstrap's `.flex-lg-fill` class to the element. Alias for `flex-lg-fill` prop.
     */
    flexLgFill?: boolean
    /**
     * Add Bootstrap's `.flex-lg-grow-0` class to the element. Alias for `flex-lg-grow-0` prop.
     */
    flexLgGrow0?: boolean
    /**
     * Add Bootstrap's `.flex-lg-grow-1` class to the element. Alias for `flex-lg-grow-1` prop.
     */
    flexLgGrow1?: boolean
    /**
     * Add Bootstrap's `.flex-lg-shrink-0` class to the element. Alias for `flex-lg-shrink-0` prop.
     */
    flexLgShrink0?: boolean
    /**
     * Add Bootstrap's `.flex-lg-shrink-1` class to the element. Alias for `flex-lg-shrink-1` prop.
     */
    flexLgShrink1?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-start` class to the element. Alias for `justify-content-lg-start` prop.
     */
    justifyContentLgStart?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-end` class to the element. Alias for `justify-content-lg-end` prop.
     */
    justifyContentLgEnd?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-center` class to the element. Alias for `justify-content-lg-center` prop.
     */
    justifyContentLgCenter?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-between` class to the element. Alias for `justify-content-lg-between` prop.
     */
    justifyContentLgBetween?: boolean
    /**
     * Add Bootstrap's `.justify-content-lg-around` class to the element. Alias for `justify-content-lg-around` prop.
     */
    justifyContentLgAround?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-start` class to the element. Alias for `align-items-lg-start` prop.
     */
    alignItemsLgStart?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-end` class to the element. Alias for `align-items-lg-end` prop.
     */
    alignItemsLgEnd?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-center` class to the element. Alias for `align-items-lg-center` prop.
     */
    alignItemsLgCenter?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-baseline` class to the element. Alias for `align-items-lg-baseline` prop.
     */
    alignItemsLgBaseline?: boolean
    /**
     * Add Bootstrap's `.align-items-lg-stretch` class to the element. Alias for `align-items-lg-stretch` prop.
     */
    alignItemsLgStretch?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-start` class to the element. Alias for `align-content-lg-start` prop.
     */
    alignContentLgStart?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-end` class to the element. Alias for `align-content-lg-end` prop.
     */
    alignContentLgEnd?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-center` class to the element. Alias for `align-content-lg-center` prop.
     */
    alignContentLgCenter?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-between` class to the element. Alias for `align-content-lg-between` prop.
     */
    alignContentLgBetween?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-around` class to the element. Alias for `align-content-lg-around` prop.
     */
    alignContentLgAround?: boolean
    /**
     * Add Bootstrap's `.align-content-lg-stretch` class to the element. Alias for `align-content-lg-stretch` prop.
     */
    alignContentLgStretch?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-auto` class to the element. Alias for `align-self-lg-auto` prop.
     */
    alignSelfLgAuto?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-start` class to the element. Alias for `align-self-lg-start` prop.
     */
    alignSelfLgStart?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-end` class to the element. Alias for `align-self-lg-end` prop.
     */
    alignSelfLgEnd?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-center` class to the element. Alias for `align-self-lg-center` prop.
     */
    alignSelfLgCenter?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-baseline` class to the element. Alias for `align-self-lg-baseline` prop.
     */
    alignSelfLgBaseline?: boolean
    /**
     * Add Bootstrap's `.align-self-lg-stretch` class to the element. Alias for `align-self-lg-stretch` prop.
     */
    alignSelfLgStretch?: boolean
    /**
     * Add Bootstrap's `.flex-xl-row` class to the element. Alias for `flex-xl-row` prop.
     */
    flexXlRow?: boolean
    /**
     * Add Bootstrap's `.flex-xl-column` class to the element. Alias for `flex-xl-column` prop.
     */
    flexXlColumn?: boolean
    /**
     * Add Bootstrap's `.flex-xl-row-reverse` class to the element. Alias for `flex-xl-row-reverse` prop.
     */
    flexXlRowReverse?: boolean
    /**
     * Add Bootstrap's `.flex-xl-column-reverse` class to the element. Alias for `flex-xl-column-reverse` prop.
     */
    flexXlColumnReverse?: boolean
    /**
     * Add Bootstrap's `.flex-xl-wrap` class to the element. Alias for `flex-xl-wrap` prop.
     */
    flexXlWrap?: boolean
    /**
     * Add Bootstrap's `.flex-xl-nowrap` class to the element. Alias for `flex-xl-nowrap` prop.
     */
    flexXlNowrap?: boolean
    /**
     * Add Bootstrap's `.flex-xl-wrap-reverse` class to the element. Alias for `flex-xl-wrap-reverse` prop.
     */
    flexXlWrapReverse?: boolean
    /**
     * Add Bootstrap's `.flex-xl-fill` class to the element. Alias for `flex-xl-fill` prop.
     */
    flexXlFill?: boolean
    /**
     * Add Bootstrap's `.flex-xl-grow-0` class to the element. Alias for `flex-xl-grow-0` prop.
     */
    flexXlGrow0?: boolean
    /**
     * Add Bootstrap's `.flex-xl-grow-1` class to the element. Alias for `flex-xl-grow-1` prop.
     */
    flexXlGrow1?: boolean
    /**
     * Add Bootstrap's `.flex-xl-shrink-0` class to the element. Alias for `flex-xl-shrink-0` prop.
     */
    flexXlShrink0?: boolean
    /**
     * Add Bootstrap's `.flex-xl-shrink-1` class to the element. Alias for `flex-xl-shrink-1` prop.
     */
    flexXlShrink1?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-start` class to the element. Alias for `justify-content-xl-start` prop.
     */
    justifyContentXlStart?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-end` class to the element. Alias for `justify-content-xl-end` prop.
     */
    justifyContentXlEnd?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-center` class to the element. Alias for `justify-content-xl-center` prop.
     */
    justifyContentXlCenter?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-between` class to the element. Alias for `justify-content-xl-between` prop.
     */
    justifyContentXlBetween?: boolean
    /**
     * Add Bootstrap's `.justify-content-xl-around` class to the element. Alias for `justify-content-xl-around` prop.
     */
    justifyContentXlAround?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-start` class to the element. Alias for `align-items-xl-start` prop.
     */
    alignItemsXlStart?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-end` class to the element. Alias for `align-items-xl-end` prop.
     */
    alignItemsXlEnd?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-center` class to the element. Alias for `align-items-xl-center` prop.
     */
    alignItemsXlCenter?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-baseline` class to the element. Alias for `align-items-xl-baseline` prop.
     */
    alignItemsXlBaseline?: boolean
    /**
     * Add Bootstrap's `.align-items-xl-stretch` class to the element. Alias for `align-items-xl-stretch` prop.
     */
    alignItemsXlStretch?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-start` class to the element. Alias for `align-content-xl-start` prop.
     */
    alignContentXlStart?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-end` class to the element. Alias for `align-content-xl-end` prop.
     */
    alignContentXlEnd?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-center` class to the element. Alias for `align-content-xl-center` prop.
     */
    alignContentXlCenter?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-between` class to the element. Alias for `align-content-xl-between` prop.
     */
    alignContentXlBetween?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-around` class to the element. Alias for `align-content-xl-around` prop.
     */
    alignContentXlAround?: boolean
    /**
     * Add Bootstrap's `.align-content-xl-stretch` class to the element. Alias for `align-content-xl-stretch` prop.
     */
    alignContentXlStretch?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-auto` class to the element. Alias for `align-self-xl-auto` prop.
     */
    alignSelfXlAuto?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-start` class to the element. Alias for `align-self-xl-start` prop.
     */
    alignSelfXlStart?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-end` class to the element. Alias for `align-self-xl-end` prop.
     */
    alignSelfXlEnd?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-center` class to the element. Alias for `align-self-xl-center` prop.
     */
    alignSelfXlCenter?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-baseline` class to the element. Alias for `align-self-xl-baseline` prop.
     */
    alignSelfXlBaseline?: boolean
    /**
     * Add Bootstrap's `.align-self-xl-stretch` class to the element. Alias for `align-self-xl-stretch` prop.
     */
    alignSelfXlStretch?: boolean
    /**
     * Add Bootstrap's `.float-left` class to the element. Alias for `float-left` prop.
     */
    floatLeft?: boolean
    /**
     * Add Bootstrap's `.float-right` class to the element. Alias for `float-right` prop.
     */
    floatRight?: boolean
    /**
     * Add Bootstrap's `.float-none` class to the element. Alias for `float-none` prop.
     */
    floatNone?: boolean
    /**
     * Add Bootstrap's `.float-sm-left` class to the element. Alias for `float-sm-left` prop.
     */
    floatSmLeft?: boolean
    /**
     * Add Bootstrap's `.float-sm-right` class to the element. Alias for `float-sm-right` prop.
     */
    floatSmRight?: boolean
    /**
     * Add Bootstrap's `.float-sm-none` class to the element. Alias for `float-sm-none` prop.
     */
    floatSmNone?: boolean
    /**
     * Add Bootstrap's `.float-md-left` class to the element. Alias for `float-md-left` prop.
     */
    floatMdLeft?: boolean
    /**
     * Add Bootstrap's `.float-md-right` class to the element. Alias for `float-md-right` prop.
     */
    floatMdRight?: boolean
    /**
     * Add Bootstrap's `.float-md-none` class to the element. Alias for `float-md-none` prop.
     */
    floatMdNone?: boolean
    /**
     * Add Bootstrap's `.float-lg-left` class to the element. Alias for `float-lg-left` prop.
     */
    floatLgLeft?: boolean
    /**
     * Add Bootstrap's `.float-lg-right` class to the element. Alias for `float-lg-right` prop.
     */
    floatLgRight?: boolean
    /**
     * Add Bootstrap's `.float-lg-none` class to the element. Alias for `float-lg-none` prop.
     */
    floatLgNone?: boolean
    /**
     * Add Bootstrap's `.float-xl-left` class to the element. Alias for `float-xl-left` prop.
     */
    floatXlLeft?: boolean
    /**
     * Add Bootstrap's `.float-xl-right` class to the element. Alias for `float-xl-right` prop.
     */
    floatXlRight?: boolean
    /**
     * Add Bootstrap's `.float-xl-none` class to the element. Alias for `float-xl-none` prop.
     */
    floatXlNone?: boolean
    /**
     * Add Bootstrap's `.overflow-auto` class to the element. Alias for `overflow-auto` prop.
     */
    overflowAuto?: boolean
    /**
     * Add Bootstrap's `.overflow-hidden` class to the element. Alias for `overflow-hidden` prop.
     */
    overflowHidden?: boolean
    /**
     * Add Bootstrap's `.position-static` class to the element. Alias for `position-static` prop.
     */
    positionStatic?: boolean
    /**
     * Add Bootstrap's `.position-relative` class to the element. Alias for `position-relative` prop.
     */
    positionRelative?: boolean
    /**
     * Add Bootstrap's `.position-absolute` class to the element. Alias for `position-absolute` prop.
     */
    positionAbsolute?: boolean
    /**
     * Add Bootstrap's `.position-fixed` class to the element. Alias for `position-fixed` prop.
     */
    positionFixed?: boolean
    /**
     * Add Bootstrap's `.position-sticky` class to the element. Alias for `position-sticky` prop.
     */
    positionSticky?: boolean
    /**
     * Add Bootstrap's `.fixed-top` class to the element. Alias for `fixed-top` prop.
     */
    fixedTop?: boolean
    /**
     * Add Bootstrap's `.fixed-bottom` class to the element. Alias for `fixed-bottom` prop.
     */
    fixedBottom?: boolean
    /**
     * Add Bootstrap's `.sticky-top` class to the element. Alias for `sticky-top` prop.
     */
    stickyTop?: boolean
    /**
     * Add Bootstrap's `.sr-only` class to the element. Alias for `sr-only` prop.
     */
    srOnly?: boolean
    /**
     * Add Bootstrap's `.sr-only-focusable` class to the element. Alias for `sr-only-focusable` prop.
     */
    srOnlyFocusable?: boolean
    /**
     * Add Bootstrap's `.shadow-sm` class to the element. Alias for `shadow-sm` prop.
     */
    shadowSm?: boolean
    /**
     * Add Bootstrap's `.shadow-lg` class to the element. Alias for `shadow-lg` prop.
     */
    shadowLg?: boolean
    /**
     * Add Bootstrap's `.shadow-none` class to the element. Alias for `shadow-none` prop.
     */
    shadowNone?: boolean
    /**
     * Add Bootstrap's `.w-25` class to the element. Alias for `w-25` prop.
     */
    w25?: boolean
    /**
     * Add Bootstrap's `.w-50` class to the element. Alias for `w-50` prop.
     */
    w50?: boolean
    /**
     * Add Bootstrap's `.w-75` class to the element. Alias for `w-75` prop.
     */
    w75?: boolean
    /**
     * Add Bootstrap's `.w-100` class to the element. Alias for `w-100` prop.
     */
    w100?: boolean
    /**
     * Add Bootstrap's `.w-auto` class to the element. Alias for `w-auto` prop.
     */
    wAuto?: boolean
    /**
     * Add Bootstrap's `.h-25` class to the element. Alias for `h-25` prop.
     */
    h25?: boolean
    /**
     * Add Bootstrap's `.h-50` class to the element. Alias for `h-50` prop.
     */
    h50?: boolean
    /**
     * Add Bootstrap's `.h-75` class to the element. Alias for `h-75` prop.
     */
    h75?: boolean
    /**
     * Add Bootstrap's `.h-100` class to the element. Alias for `h-100` prop.
     */
    h100?: boolean
    /**
     * Add Bootstrap's `.h-auto` class to the element. Alias for `h-auto` prop.
     */
    hAuto?: boolean
    /**
     * Add Bootstrap's `.mw-100` class to the element. Alias for `mw-100` prop.
     */
    mw100?: boolean
    /**
     * Add Bootstrap's `.mh-100` class to the element. Alias for `mh-100` prop.
     */
    mh100?: boolean
    /**
     * Add Bootstrap's `.min-vw-100` class to the element. Alias for `min-vw-100` prop.
     */
    minVw100?: boolean
    /**
     * Add Bootstrap's `.min-vh-100` class to the element. Alias for `min-vh-100` prop.
     */
    minVh100?: boolean
    /**
     * Add Bootstrap's `.vw-100` class to the element. Alias for `vw-100` prop.
     */
    vw100?: boolean
    /**
     * Add Bootstrap's `.vh-100` class to the element. Alias for `vh-100` prop.
     */
    vh100?: boolean
    /**
     * Add Bootstrap's `.stretched-link` class to the element. Alias for `stretched-link` prop.
     */
    stretchedLink?: boolean
    /**
     * Add Bootstrap's `.m-0` class to the element. Alias for `m-0` prop.
     */
    m0?: boolean
    /**
     * Add Bootstrap's `.mt-0` class to the element. Alias for `mt-0` prop.
     */
    mt0?: boolean
    /**
     * Add Bootstrap's `.my-0` class to the element. Alias for `my-0` prop.
     */
    my0?: boolean
    /**
     * Add Bootstrap's `.mr-0` class to the element. Alias for `mr-0` prop.
     */
    mr0?: boolean
    /**
     * Add Bootstrap's `.mx-0` class to the element. Alias for `mx-0` prop.
     */
    mx0?: boolean
    /**
     * Add Bootstrap's `.mb-0` class to the element. Alias for `mb-0` prop.
     */
    mb0?: boolean
    /**
     * Add Bootstrap's `.ml-0` class to the element. Alias for `ml-0` prop.
     */
    ml0?: boolean
    /**
     * Add Bootstrap's `.m-1` class to the element. Alias for `m-1` prop.
     */
    m1?: boolean
    /**
     * Add Bootstrap's `.mt-1` class to the element. Alias for `mt-1` prop.
     */
    mt1?: boolean
    /**
     * Add Bootstrap's `.my-1` class to the element. Alias for `my-1` prop.
     */
    my1?: boolean
    /**
     * Add Bootstrap's `.mr-1` class to the element. Alias for `mr-1` prop.
     */
    mr1?: boolean
    /**
     * Add Bootstrap's `.mx-1` class to the element. Alias for `mx-1` prop.
     */
    mx1?: boolean
    /**
     * Add Bootstrap's `.mb-1` class to the element. Alias for `mb-1` prop.
     */
    mb1?: boolean
    /**
     * Add Bootstrap's `.ml-1` class to the element. Alias for `ml-1` prop.
     */
    ml1?: boolean
    /**
     * Add Bootstrap's `.m-2` class to the element. Alias for `m-2` prop.
     */
    m2?: boolean
    /**
     * Add Bootstrap's `.mt-2` class to the element. Alias for `mt-2` prop.
     */
    mt2?: boolean
    /**
     * Add Bootstrap's `.my-2` class to the element. Alias for `my-2` prop.
     */
    my2?: boolean
    /**
     * Add Bootstrap's `.mr-2` class to the element. Alias for `mr-2` prop.
     */
    mr2?: boolean
    /**
     * Add Bootstrap's `.mx-2` class to the element. Alias for `mx-2` prop.
     */
    mx2?: boolean
    /**
     * Add Bootstrap's `.mb-2` class to the element. Alias for `mb-2` prop.
     */
    mb2?: boolean
    /**
     * Add Bootstrap's `.ml-2` class to the element. Alias for `ml-2` prop.
     */
    ml2?: boolean
    /**
     * Add Bootstrap's `.m-3` class to the element. Alias for `m-3` prop.
     */
    m3?: boolean
    /**
     * Add Bootstrap's `.mt-3` class to the element. Alias for `mt-3` prop.
     */
    mt3?: boolean
    /**
     * Add Bootstrap's `.my-3` class to the element. Alias for `my-3` prop.
     */
    my3?: boolean
    /**
     * Add Bootstrap's `.mr-3` class to the element. Alias for `mr-3` prop.
     */
    mr3?: boolean
    /**
     * Add Bootstrap's `.mx-3` class to the element. Alias for `mx-3` prop.
     */
    mx3?: boolean
    /**
     * Add Bootstrap's `.mb-3` class to the element. Alias for `mb-3` prop.
     */
    mb3?: boolean
    /**
     * Add Bootstrap's `.ml-3` class to the element. Alias for `ml-3` prop.
     */
    ml3?: boolean
    /**
     * Add Bootstrap's `.m-4` class to the element. Alias for `m-4` prop.
     */
    m4?: boolean
    /**
     * Add Bootstrap's `.mt-4` class to the element. Alias for `mt-4` prop.
     */
    mt4?: boolean
    /**
     * Add Bootstrap's `.my-4` class to the element. Alias for `my-4` prop.
     */
    my4?: boolean
    /**
     * Add Bootstrap's `.mr-4` class to the element. Alias for `mr-4` prop.
     */
    mr4?: boolean
    /**
     * Add Bootstrap's `.mx-4` class to the element. Alias for `mx-4` prop.
     */
    mx4?: boolean
    /**
     * Add Bootstrap's `.mb-4` class to the element. Alias for `mb-4` prop.
     */
    mb4?: boolean
    /**
     * Add Bootstrap's `.ml-4` class to the element. Alias for `ml-4` prop.
     */
    ml4?: boolean
    /**
     * Add Bootstrap's `.m-5` class to the element. Alias for `m-5` prop.
     */
    m5?: boolean
    /**
     * Add Bootstrap's `.mt-5` class to the element. Alias for `mt-5` prop.
     */
    mt5?: boolean
    /**
     * Add Bootstrap's `.my-5` class to the element. Alias for `my-5` prop.
     */
    my5?: boolean
    /**
     * Add Bootstrap's `.mr-5` class to the element. Alias for `mr-5` prop.
     */
    mr5?: boolean
    /**
     * Add Bootstrap's `.mx-5` class to the element. Alias for `mx-5` prop.
     */
    mx5?: boolean
    /**
     * Add Bootstrap's `.mb-5` class to the element. Alias for `mb-5` prop.
     */
    mb5?: boolean
    /**
     * Add Bootstrap's `.ml-5` class to the element. Alias for `ml-5` prop.
     */
    ml5?: boolean
    /**
     * Add Bootstrap's `.p-0` class to the element. Alias for `p-0` prop.
     */
    p0?: boolean
    /**
     * Add Bootstrap's `.pt-0` class to the element. Alias for `pt-0` prop.
     */
    pt0?: boolean
    /**
     * Add Bootstrap's `.py-0` class to the element. Alias for `py-0` prop.
     */
    py0?: boolean
    /**
     * Add Bootstrap's `.pr-0` class to the element. Alias for `pr-0` prop.
     */
    pr0?: boolean
    /**
     * Add Bootstrap's `.px-0` class to the element. Alias for `px-0` prop.
     */
    px0?: boolean
    /**
     * Add Bootstrap's `.pb-0` class to the element. Alias for `pb-0` prop.
     */
    pb0?: boolean
    /**
     * Add Bootstrap's `.pl-0` class to the element. Alias for `pl-0` prop.
     */
    pl0?: boolean
    /**
     * Add Bootstrap's `.p-1` class to the element. Alias for `p-1` prop.
     */
    p1?: boolean
    /**
     * Add Bootstrap's `.pt-1` class to the element. Alias for `pt-1` prop.
     */
    pt1?: boolean
    /**
     * Add Bootstrap's `.py-1` class to the element. Alias for `py-1` prop.
     */
    py1?: boolean
    /**
     * Add Bootstrap's `.pr-1` class to the element. Alias for `pr-1` prop.
     */
    pr1?: boolean
    /**
     * Add Bootstrap's `.px-1` class to the element. Alias for `px-1` prop.
     */
    px1?: boolean
    /**
     * Add Bootstrap's `.pb-1` class to the element. Alias for `pb-1` prop.
     */
    pb1?: boolean
    /**
     * Add Bootstrap's `.pl-1` class to the element. Alias for `pl-1` prop.
     */
    pl1?: boolean
    /**
     * Add Bootstrap's `.p-2` class to the element. Alias for `p-2` prop.
     */
    p2?: boolean
    /**
     * Add Bootstrap's `.pt-2` class to the element. Alias for `pt-2` prop.
     */
    pt2?: boolean
    /**
     * Add Bootstrap's `.py-2` class to the element. Alias for `py-2` prop.
     */
    py2?: boolean
    /**
     * Add Bootstrap's `.pr-2` class to the element. Alias for `pr-2` prop.
     */
    pr2?: boolean
    /**
     * Add Bootstrap's `.px-2` class to the element. Alias for `px-2` prop.
     */
    px2?: boolean
    /**
     * Add Bootstrap's `.pb-2` class to the element. Alias for `pb-2` prop.
     */
    pb2?: boolean
    /**
     * Add Bootstrap's `.pl-2` class to the element. Alias for `pl-2` prop.
     */
    pl2?: boolean
    /**
     * Add Bootstrap's `.p-3` class to the element. Alias for `p-3` prop.
     */
    p3?: boolean
    /**
     * Add Bootstrap's `.pt-3` class to the element. Alias for `pt-3` prop.
     */
    pt3?: boolean
    /**
     * Add Bootstrap's `.py-3` class to the element. Alias for `py-3` prop.
     */
    py3?: boolean
    /**
     * Add Bootstrap's `.pr-3` class to the element. Alias for `pr-3` prop.
     */
    pr3?: boolean
    /**
     * Add Bootstrap's `.px-3` class to the element. Alias for `px-3` prop.
     */
    px3?: boolean
    /**
     * Add Bootstrap's `.pb-3` class to the element. Alias for `pb-3` prop.
     */
    pb3?: boolean
    /**
     * Add Bootstrap's `.pl-3` class to the element. Alias for `pl-3` prop.
     */
    pl3?: boolean
    /**
     * Add Bootstrap's `.p-4` class to the element. Alias for `p-4` prop.
     */
    p4?: boolean
    /**
     * Add Bootstrap's `.pt-4` class to the element. Alias for `pt-4` prop.
     */
    pt4?: boolean
    /**
     * Add Bootstrap's `.py-4` class to the element. Alias for `py-4` prop.
     */
    py4?: boolean
    /**
     * Add Bootstrap's `.pr-4` class to the element. Alias for `pr-4` prop.
     */
    pr4?: boolean
    /**
     * Add Bootstrap's `.px-4` class to the element. Alias for `px-4` prop.
     */
    px4?: boolean
    /**
     * Add Bootstrap's `.pb-4` class to the element. Alias for `pb-4` prop.
     */
    pb4?: boolean
    /**
     * Add Bootstrap's `.pl-4` class to the element. Alias for `pl-4` prop.
     */
    pl4?: boolean
    /**
     * Add Bootstrap's `.p-5` class to the element. Alias for `p-5` prop.
     */
    p5?: boolean
    /**
     * Add Bootstrap's `.pt-5` class to the element. Alias for `pt-5` prop.
     */
    pt5?: boolean
    /**
     * Add Bootstrap's `.py-5` class to the element. Alias for `py-5` prop.
     */
    py5?: boolean
    /**
     * Add Bootstrap's `.pr-5` class to the element. Alias for `pr-5` prop.
     */
    pr5?: boolean
    /**
     * Add Bootstrap's `.px-5` class to the element. Alias for `px-5` prop.
     */
    px5?: boolean
    /**
     * Add Bootstrap's `.pb-5` class to the element. Alias for `pb-5` prop.
     */
    pb5?: boolean
    /**
     * Add Bootstrap's `.pl-5` class to the element. Alias for `pl-5` prop.
     */
    pl5?: boolean
    /**
     * Add Bootstrap's `.m-n1` class to the element. Alias for `m-n1` prop.
     */
    mN1?: boolean
    /**
     * Add Bootstrap's `.mt-n1` class to the element. Alias for `mt-n1` prop.
     */
    mtN1?: boolean
    /**
     * Add Bootstrap's `.my-n1` class to the element. Alias for `my-n1` prop.
     */
    myN1?: boolean
    /**
     * Add Bootstrap's `.mr-n1` class to the element. Alias for `mr-n1` prop.
     */
    mrN1?: boolean
    /**
     * Add Bootstrap's `.mx-n1` class to the element. Alias for `mx-n1` prop.
     */
    mxN1?: boolean
    /**
     * Add Bootstrap's `.mb-n1` class to the element. Alias for `mb-n1` prop.
     */
    mbN1?: boolean
    /**
     * Add Bootstrap's `.ml-n1` class to the element. Alias for `ml-n1` prop.
     */
    mlN1?: boolean
    /**
     * Add Bootstrap's `.m-n2` class to the element. Alias for `m-n2` prop.
     */
    mN2?: boolean
    /**
     * Add Bootstrap's `.mt-n2` class to the element. Alias for `mt-n2` prop.
     */
    mtN2?: boolean
    /**
     * Add Bootstrap's `.my-n2` class to the element. Alias for `my-n2` prop.
     */
    myN2?: boolean
    /**
     * Add Bootstrap's `.mr-n2` class to the element. Alias for `mr-n2` prop.
     */
    mrN2?: boolean
    /**
     * Add Bootstrap's `.mx-n2` class to the element. Alias for `mx-n2` prop.
     */
    mxN2?: boolean
    /**
     * Add Bootstrap's `.mb-n2` class to the element. Alias for `mb-n2` prop.
     */
    mbN2?: boolean
    /**
     * Add Bootstrap's `.ml-n2` class to the element. Alias for `ml-n2` prop.
     */
    mlN2?: boolean
    /**
     * Add Bootstrap's `.m-n3` class to the element. Alias for `m-n3` prop.
     */
    mN3?: boolean
    /**
     * Add Bootstrap's `.mt-n3` class to the element. Alias for `mt-n3` prop.
     */
    mtN3?: boolean
    /**
     * Add Bootstrap's `.my-n3` class to the element. Alias for `my-n3` prop.
     */
    myN3?: boolean
    /**
     * Add Bootstrap's `.mr-n3` class to the element. Alias for `mr-n3` prop.
     */
    mrN3?: boolean
    /**
     * Add Bootstrap's `.mx-n3` class to the element. Alias for `mx-n3` prop.
     */
    mxN3?: boolean
    /**
     * Add Bootstrap's `.mb-n3` class to the element. Alias for `mb-n3` prop.
     */
    mbN3?: boolean
    /**
     * Add Bootstrap's `.ml-n3` class to the element. Alias for `ml-n3` prop.
     */
    mlN3?: boolean
    /**
     * Add Bootstrap's `.m-n4` class to the element. Alias for `m-n4` prop.
     */
    mN4?: boolean
    /**
     * Add Bootstrap's `.mt-n4` class to the element. Alias for `mt-n4` prop.
     */
    mtN4?: boolean
    /**
     * Add Bootstrap's `.my-n4` class to the element. Alias for `my-n4` prop.
     */
    myN4?: boolean
    /**
     * Add Bootstrap's `.mr-n4` class to the element. Alias for `mr-n4` prop.
     */
    mrN4?: boolean
    /**
     * Add Bootstrap's `.mx-n4` class to the element. Alias for `mx-n4` prop.
     */
    mxN4?: boolean
    /**
     * Add Bootstrap's `.mb-n4` class to the element. Alias for `mb-n4` prop.
     */
    mbN4?: boolean
    /**
     * Add Bootstrap's `.ml-n4` class to the element. Alias for `ml-n4` prop.
     */
    mlN4?: boolean
    /**
     * Add Bootstrap's `.m-n5` class to the element. Alias for `m-n5` prop.
     */
    mN5?: boolean
    /**
     * Add Bootstrap's `.mt-n5` class to the element. Alias for `mt-n5` prop.
     */
    mtN5?: boolean
    /**
     * Add Bootstrap's `.my-n5` class to the element. Alias for `my-n5` prop.
     */
    myN5?: boolean
    /**
     * Add Bootstrap's `.mr-n5` class to the element. Alias for `mr-n5` prop.
     */
    mrN5?: boolean
    /**
     * Add Bootstrap's `.mx-n5` class to the element. Alias for `mx-n5` prop.
     */
    mxN5?: boolean
    /**
     * Add Bootstrap's `.mb-n5` class to the element. Alias for `mb-n5` prop.
     */
    mbN5?: boolean
    /**
     * Add Bootstrap's `.ml-n5` class to the element. Alias for `ml-n5` prop.
     */
    mlN5?: boolean
    /**
     * Add Bootstrap's `.m-auto` class to the element. Alias for `m-auto` prop.
     */
    mAuto?: boolean
    /**
     * Add Bootstrap's `.mt-auto` class to the element. Alias for `mt-auto` prop.
     */
    mtAuto?: boolean
    /**
     * Add Bootstrap's `.my-auto` class to the element. Alias for `my-auto` prop.
     */
    myAuto?: boolean
    /**
     * Add Bootstrap's `.mr-auto` class to the element. Alias for `mr-auto` prop.
     */
    mrAuto?: boolean
    /**
     * Add Bootstrap's `.mx-auto` class to the element. Alias for `mx-auto` prop.
     */
    mxAuto?: boolean
    /**
     * Add Bootstrap's `.mb-auto` class to the element. Alias for `mb-auto` prop.
     */
    mbAuto?: boolean
    /**
     * Add Bootstrap's `.ml-auto` class to the element. Alias for `ml-auto` prop.
     */
    mlAuto?: boolean
    /**
     * Add Bootstrap's `.m-sm-0` class to the element. Alias for `m-sm-0` prop.
     */
    mSm0?: boolean
    /**
     * Add Bootstrap's `.mt-sm-0` class to the element. Alias for `mt-sm-0` prop.
     */
    mtSm0?: boolean
    /**
     * Add Bootstrap's `.my-sm-0` class to the element. Alias for `my-sm-0` prop.
     */
    mySm0?: boolean
    /**
     * Add Bootstrap's `.mr-sm-0` class to the element. Alias for `mr-sm-0` prop.
     */
    mrSm0?: boolean
    /**
     * Add Bootstrap's `.mx-sm-0` class to the element. Alias for `mx-sm-0` prop.
     */
    mxSm0?: boolean
    /**
     * Add Bootstrap's `.mb-sm-0` class to the element. Alias for `mb-sm-0` prop.
     */
    mbSm0?: boolean
    /**
     * Add Bootstrap's `.ml-sm-0` class to the element. Alias for `ml-sm-0` prop.
     */
    mlSm0?: boolean
    /**
     * Add Bootstrap's `.m-sm-1` class to the element. Alias for `m-sm-1` prop.
     */
    mSm1?: boolean
    /**
     * Add Bootstrap's `.mt-sm-1` class to the element. Alias for `mt-sm-1` prop.
     */
    mtSm1?: boolean
    /**
     * Add Bootstrap's `.my-sm-1` class to the element. Alias for `my-sm-1` prop.
     */
    mySm1?: boolean
    /**
     * Add Bootstrap's `.mr-sm-1` class to the element. Alias for `mr-sm-1` prop.
     */
    mrSm1?: boolean
    /**
     * Add Bootstrap's `.mx-sm-1` class to the element. Alias for `mx-sm-1` prop.
     */
    mxSm1?: boolean
    /**
     * Add Bootstrap's `.mb-sm-1` class to the element. Alias for `mb-sm-1` prop.
     */
    mbSm1?: boolean
    /**
     * Add Bootstrap's `.ml-sm-1` class to the element. Alias for `ml-sm-1` prop.
     */
    mlSm1?: boolean
    /**
     * Add Bootstrap's `.m-sm-2` class to the element. Alias for `m-sm-2` prop.
     */
    mSm2?: boolean
    /**
     * Add Bootstrap's `.mt-sm-2` class to the element. Alias for `mt-sm-2` prop.
     */
    mtSm2?: boolean
    /**
     * Add Bootstrap's `.my-sm-2` class to the element. Alias for `my-sm-2` prop.
     */
    mySm2?: boolean
    /**
     * Add Bootstrap's `.mr-sm-2` class to the element. Alias for `mr-sm-2` prop.
     */
    mrSm2?: boolean
    /**
     * Add Bootstrap's `.mx-sm-2` class to the element. Alias for `mx-sm-2` prop.
     */
    mxSm2?: boolean
    /**
     * Add Bootstrap's `.mb-sm-2` class to the element. Alias for `mb-sm-2` prop.
     */
    mbSm2?: boolean
    /**
     * Add Bootstrap's `.ml-sm-2` class to the element. Alias for `ml-sm-2` prop.
     */
    mlSm2?: boolean
    /**
     * Add Bootstrap's `.m-sm-3` class to the element. Alias for `m-sm-3` prop.
     */
    mSm3?: boolean
    /**
     * Add Bootstrap's `.mt-sm-3` class to the element. Alias for `mt-sm-3` prop.
     */
    mtSm3?: boolean
    /**
     * Add Bootstrap's `.my-sm-3` class to the element. Alias for `my-sm-3` prop.
     */
    mySm3?: boolean
    /**
     * Add Bootstrap's `.mr-sm-3` class to the element. Alias for `mr-sm-3` prop.
     */
    mrSm3?: boolean
    /**
     * Add Bootstrap's `.mx-sm-3` class to the element. Alias for `mx-sm-3` prop.
     */
    mxSm3?: boolean
    /**
     * Add Bootstrap's `.mb-sm-3` class to the element. Alias for `mb-sm-3` prop.
     */
    mbSm3?: boolean
    /**
     * Add Bootstrap's `.ml-sm-3` class to the element. Alias for `ml-sm-3` prop.
     */
    mlSm3?: boolean
    /**
     * Add Bootstrap's `.m-sm-4` class to the element. Alias for `m-sm-4` prop.
     */
    mSm4?: boolean
    /**
     * Add Bootstrap's `.mt-sm-4` class to the element. Alias for `mt-sm-4` prop.
     */
    mtSm4?: boolean
    /**
     * Add Bootstrap's `.my-sm-4` class to the element. Alias for `my-sm-4` prop.
     */
    mySm4?: boolean
    /**
     * Add Bootstrap's `.mr-sm-4` class to the element. Alias for `mr-sm-4` prop.
     */
    mrSm4?: boolean
    /**
     * Add Bootstrap's `.mx-sm-4` class to the element. Alias for `mx-sm-4` prop.
     */
    mxSm4?: boolean
    /**
     * Add Bootstrap's `.mb-sm-4` class to the element. Alias for `mb-sm-4` prop.
     */
    mbSm4?: boolean
    /**
     * Add Bootstrap's `.ml-sm-4` class to the element. Alias for `ml-sm-4` prop.
     */
    mlSm4?: boolean
    /**
     * Add Bootstrap's `.m-sm-5` class to the element. Alias for `m-sm-5` prop.
     */
    mSm5?: boolean
    /**
     * Add Bootstrap's `.mt-sm-5` class to the element. Alias for `mt-sm-5` prop.
     */
    mtSm5?: boolean
    /**
     * Add Bootstrap's `.my-sm-5` class to the element. Alias for `my-sm-5` prop.
     */
    mySm5?: boolean
    /**
     * Add Bootstrap's `.mr-sm-5` class to the element. Alias for `mr-sm-5` prop.
     */
    mrSm5?: boolean
    /**
     * Add Bootstrap's `.mx-sm-5` class to the element. Alias for `mx-sm-5` prop.
     */
    mxSm5?: boolean
    /**
     * Add Bootstrap's `.mb-sm-5` class to the element. Alias for `mb-sm-5` prop.
     */
    mbSm5?: boolean
    /**
     * Add Bootstrap's `.ml-sm-5` class to the element. Alias for `ml-sm-5` prop.
     */
    mlSm5?: boolean
    /**
     * Add Bootstrap's `.p-sm-0` class to the element. Alias for `p-sm-0` prop.
     */
    pSm0?: boolean
    /**
     * Add Bootstrap's `.pt-sm-0` class to the element. Alias for `pt-sm-0` prop.
     */
    ptSm0?: boolean
    /**
     * Add Bootstrap's `.py-sm-0` class to the element. Alias for `py-sm-0` prop.
     */
    pySm0?: boolean
    /**
     * Add Bootstrap's `.pr-sm-0` class to the element. Alias for `pr-sm-0` prop.
     */
    prSm0?: boolean
    /**
     * Add Bootstrap's `.px-sm-0` class to the element. Alias for `px-sm-0` prop.
     */
    pxSm0?: boolean
    /**
     * Add Bootstrap's `.pb-sm-0` class to the element. Alias for `pb-sm-0` prop.
     */
    pbSm0?: boolean
    /**
     * Add Bootstrap's `.pl-sm-0` class to the element. Alias for `pl-sm-0` prop.
     */
    plSm0?: boolean
    /**
     * Add Bootstrap's `.p-sm-1` class to the element. Alias for `p-sm-1` prop.
     */
    pSm1?: boolean
    /**
     * Add Bootstrap's `.pt-sm-1` class to the element. Alias for `pt-sm-1` prop.
     */
    ptSm1?: boolean
    /**
     * Add Bootstrap's `.py-sm-1` class to the element. Alias for `py-sm-1` prop.
     */
    pySm1?: boolean
    /**
     * Add Bootstrap's `.pr-sm-1` class to the element. Alias for `pr-sm-1` prop.
     */
    prSm1?: boolean
    /**
     * Add Bootstrap's `.px-sm-1` class to the element. Alias for `px-sm-1` prop.
     */
    pxSm1?: boolean
    /**
     * Add Bootstrap's `.pb-sm-1` class to the element. Alias for `pb-sm-1` prop.
     */
    pbSm1?: boolean
    /**
     * Add Bootstrap's `.pl-sm-1` class to the element. Alias for `pl-sm-1` prop.
     */
    plSm1?: boolean
    /**
     * Add Bootstrap's `.p-sm-2` class to the element. Alias for `p-sm-2` prop.
     */
    pSm2?: boolean
    /**
     * Add Bootstrap's `.pt-sm-2` class to the element. Alias for `pt-sm-2` prop.
     */
    ptSm2?: boolean
    /**
     * Add Bootstrap's `.py-sm-2` class to the element. Alias for `py-sm-2` prop.
     */
    pySm2?: boolean
    /**
     * Add Bootstrap's `.pr-sm-2` class to the element. Alias for `pr-sm-2` prop.
     */
    prSm2?: boolean
    /**
     * Add Bootstrap's `.px-sm-2` class to the element. Alias for `px-sm-2` prop.
     */
    pxSm2?: boolean
    /**
     * Add Bootstrap's `.pb-sm-2` class to the element. Alias for `pb-sm-2` prop.
     */
    pbSm2?: boolean
    /**
     * Add Bootstrap's `.pl-sm-2` class to the element. Alias for `pl-sm-2` prop.
     */
    plSm2?: boolean
    /**
     * Add Bootstrap's `.p-sm-3` class to the element. Alias for `p-sm-3` prop.
     */
    pSm3?: boolean
    /**
     * Add Bootstrap's `.pt-sm-3` class to the element. Alias for `pt-sm-3` prop.
     */
    ptSm3?: boolean
    /**
     * Add Bootstrap's `.py-sm-3` class to the element. Alias for `py-sm-3` prop.
     */
    pySm3?: boolean
    /**
     * Add Bootstrap's `.pr-sm-3` class to the element. Alias for `pr-sm-3` prop.
     */
    prSm3?: boolean
    /**
     * Add Bootstrap's `.px-sm-3` class to the element. Alias for `px-sm-3` prop.
     */
    pxSm3?: boolean
    /**
     * Add Bootstrap's `.pb-sm-3` class to the element. Alias for `pb-sm-3` prop.
     */
    pbSm3?: boolean
    /**
     * Add Bootstrap's `.pl-sm-3` class to the element. Alias for `pl-sm-3` prop.
     */
    plSm3?: boolean
    /**
     * Add Bootstrap's `.p-sm-4` class to the element. Alias for `p-sm-4` prop.
     */
    pSm4?: boolean
    /**
     * Add Bootstrap's `.pt-sm-4` class to the element. Alias for `pt-sm-4` prop.
     */
    ptSm4?: boolean
    /**
     * Add Bootstrap's `.py-sm-4` class to the element. Alias for `py-sm-4` prop.
     */
    pySm4?: boolean
    /**
     * Add Bootstrap's `.pr-sm-4` class to the element. Alias for `pr-sm-4` prop.
     */
    prSm4?: boolean
    /**
     * Add Bootstrap's `.px-sm-4` class to the element. Alias for `px-sm-4` prop.
     */
    pxSm4?: boolean
    /**
     * Add Bootstrap's `.pb-sm-4` class to the element. Alias for `pb-sm-4` prop.
     */
    pbSm4?: boolean
    /**
     * Add Bootstrap's `.pl-sm-4` class to the element. Alias for `pl-sm-4` prop.
     */
    plSm4?: boolean
    /**
     * Add Bootstrap's `.p-sm-5` class to the element. Alias for `p-sm-5` prop.
     */
    pSm5?: boolean
    /**
     * Add Bootstrap's `.pt-sm-5` class to the element. Alias for `pt-sm-5` prop.
     */
    ptSm5?: boolean
    /**
     * Add Bootstrap's `.py-sm-5` class to the element. Alias for `py-sm-5` prop.
     */
    pySm5?: boolean
    /**
     * Add Bootstrap's `.pr-sm-5` class to the element. Alias for `pr-sm-5` prop.
     */
    prSm5?: boolean
    /**
     * Add Bootstrap's `.px-sm-5` class to the element. Alias for `px-sm-5` prop.
     */
    pxSm5?: boolean
    /**
     * Add Bootstrap's `.pb-sm-5` class to the element. Alias for `pb-sm-5` prop.
     */
    pbSm5?: boolean
    /**
     * Add Bootstrap's `.pl-sm-5` class to the element. Alias for `pl-sm-5` prop.
     */
    plSm5?: boolean
    /**
     * Add Bootstrap's `.m-sm-n1` class to the element. Alias for `m-sm-n1` prop.
     */
    mSmN1?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n1` class to the element. Alias for `mt-sm-n1` prop.
     */
    mtSmN1?: boolean
    /**
     * Add Bootstrap's `.my-sm-n1` class to the element. Alias for `my-sm-n1` prop.
     */
    mySmN1?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n1` class to the element. Alias for `mr-sm-n1` prop.
     */
    mrSmN1?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n1` class to the element. Alias for `mx-sm-n1` prop.
     */
    mxSmN1?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n1` class to the element. Alias for `mb-sm-n1` prop.
     */
    mbSmN1?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n1` class to the element. Alias for `ml-sm-n1` prop.
     */
    mlSmN1?: boolean
    /**
     * Add Bootstrap's `.m-sm-n2` class to the element. Alias for `m-sm-n2` prop.
     */
    mSmN2?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n2` class to the element. Alias for `mt-sm-n2` prop.
     */
    mtSmN2?: boolean
    /**
     * Add Bootstrap's `.my-sm-n2` class to the element. Alias for `my-sm-n2` prop.
     */
    mySmN2?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n2` class to the element. Alias for `mr-sm-n2` prop.
     */
    mrSmN2?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n2` class to the element. Alias for `mx-sm-n2` prop.
     */
    mxSmN2?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n2` class to the element. Alias for `mb-sm-n2` prop.
     */
    mbSmN2?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n2` class to the element. Alias for `ml-sm-n2` prop.
     */
    mlSmN2?: boolean
    /**
     * Add Bootstrap's `.m-sm-n3` class to the element. Alias for `m-sm-n3` prop.
     */
    mSmN3?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n3` class to the element. Alias for `mt-sm-n3` prop.
     */
    mtSmN3?: boolean
    /**
     * Add Bootstrap's `.my-sm-n3` class to the element. Alias for `my-sm-n3` prop.
     */
    mySmN3?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n3` class to the element. Alias for `mr-sm-n3` prop.
     */
    mrSmN3?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n3` class to the element. Alias for `mx-sm-n3` prop.
     */
    mxSmN3?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n3` class to the element. Alias for `mb-sm-n3` prop.
     */
    mbSmN3?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n3` class to the element. Alias for `ml-sm-n3` prop.
     */
    mlSmN3?: boolean
    /**
     * Add Bootstrap's `.m-sm-n4` class to the element. Alias for `m-sm-n4` prop.
     */
    mSmN4?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n4` class to the element. Alias for `mt-sm-n4` prop.
     */
    mtSmN4?: boolean
    /**
     * Add Bootstrap's `.my-sm-n4` class to the element. Alias for `my-sm-n4` prop.
     */
    mySmN4?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n4` class to the element. Alias for `mr-sm-n4` prop.
     */
    mrSmN4?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n4` class to the element. Alias for `mx-sm-n4` prop.
     */
    mxSmN4?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n4` class to the element. Alias for `mb-sm-n4` prop.
     */
    mbSmN4?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n4` class to the element. Alias for `ml-sm-n4` prop.
     */
    mlSmN4?: boolean
    /**
     * Add Bootstrap's `.m-sm-n5` class to the element. Alias for `m-sm-n5` prop.
     */
    mSmN5?: boolean
    /**
     * Add Bootstrap's `.mt-sm-n5` class to the element. Alias for `mt-sm-n5` prop.
     */
    mtSmN5?: boolean
    /**
     * Add Bootstrap's `.my-sm-n5` class to the element. Alias for `my-sm-n5` prop.
     */
    mySmN5?: boolean
    /**
     * Add Bootstrap's `.mr-sm-n5` class to the element. Alias for `mr-sm-n5` prop.
     */
    mrSmN5?: boolean
    /**
     * Add Bootstrap's `.mx-sm-n5` class to the element. Alias for `mx-sm-n5` prop.
     */
    mxSmN5?: boolean
    /**
     * Add Bootstrap's `.mb-sm-n5` class to the element. Alias for `mb-sm-n5` prop.
     */
    mbSmN5?: boolean
    /**
     * Add Bootstrap's `.ml-sm-n5` class to the element. Alias for `ml-sm-n5` prop.
     */
    mlSmN5?: boolean
    /**
     * Add Bootstrap's `.m-sm-auto` class to the element. Alias for `m-sm-auto` prop.
     */
    mSmAuto?: boolean
    /**
     * Add Bootstrap's `.mt-sm-auto` class to the element. Alias for `mt-sm-auto` prop.
     */
    mtSmAuto?: boolean
    /**
     * Add Bootstrap's `.my-sm-auto` class to the element. Alias for `my-sm-auto` prop.
     */
    mySmAuto?: boolean
    /**
     * Add Bootstrap's `.mr-sm-auto` class to the element. Alias for `mr-sm-auto` prop.
     */
    mrSmAuto?: boolean
    /**
     * Add Bootstrap's `.mx-sm-auto` class to the element. Alias for `mx-sm-auto` prop.
     */
    mxSmAuto?: boolean
    /**
     * Add Bootstrap's `.mb-sm-auto` class to the element. Alias for `mb-sm-auto` prop.
     */
    mbSmAuto?: boolean
    /**
     * Add Bootstrap's `.ml-sm-auto` class to the element. Alias for `ml-sm-auto` prop.
     */
    mlSmAuto?: boolean
    /**
     * Add Bootstrap's `.m-md-0` class to the element. Alias for `m-md-0` prop.
     */
    mMd0?: boolean
    /**
     * Add Bootstrap's `.mt-md-0` class to the element. Alias for `mt-md-0` prop.
     */
    mtMd0?: boolean
    /**
     * Add Bootstrap's `.my-md-0` class to the element. Alias for `my-md-0` prop.
     */
    myMd0?: boolean
    /**
     * Add Bootstrap's `.mr-md-0` class to the element. Alias for `mr-md-0` prop.
     */
    mrMd0?: boolean
    /**
     * Add Bootstrap's `.mx-md-0` class to the element. Alias for `mx-md-0` prop.
     */
    mxMd0?: boolean
    /**
     * Add Bootstrap's `.mb-md-0` class to the element. Alias for `mb-md-0` prop.
     */
    mbMd0?: boolean
    /**
     * Add Bootstrap's `.ml-md-0` class to the element. Alias for `ml-md-0` prop.
     */
    mlMd0?: boolean
    /**
     * Add Bootstrap's `.m-md-1` class to the element. Alias for `m-md-1` prop.
     */
    mMd1?: boolean
    /**
     * Add Bootstrap's `.mt-md-1` class to the element. Alias for `mt-md-1` prop.
     */
    mtMd1?: boolean
    /**
     * Add Bootstrap's `.my-md-1` class to the element. Alias for `my-md-1` prop.
     */
    myMd1?: boolean
    /**
     * Add Bootstrap's `.mr-md-1` class to the element. Alias for `mr-md-1` prop.
     */
    mrMd1?: boolean
    /**
     * Add Bootstrap's `.mx-md-1` class to the element. Alias for `mx-md-1` prop.
     */
    mxMd1?: boolean
    /**
     * Add Bootstrap's `.mb-md-1` class to the element. Alias for `mb-md-1` prop.
     */
    mbMd1?: boolean
    /**
     * Add Bootstrap's `.ml-md-1` class to the element. Alias for `ml-md-1` prop.
     */
    mlMd1?: boolean
    /**
     * Add Bootstrap's `.m-md-2` class to the element. Alias for `m-md-2` prop.
     */
    mMd2?: boolean
    /**
     * Add Bootstrap's `.mt-md-2` class to the element. Alias for `mt-md-2` prop.
     */
    mtMd2?: boolean
    /**
     * Add Bootstrap's `.my-md-2` class to the element. Alias for `my-md-2` prop.
     */
    myMd2?: boolean
    /**
     * Add Bootstrap's `.mr-md-2` class to the element. Alias for `mr-md-2` prop.
     */
    mrMd2?: boolean
    /**
     * Add Bootstrap's `.mx-md-2` class to the element. Alias for `mx-md-2` prop.
     */
    mxMd2?: boolean
    /**
     * Add Bootstrap's `.mb-md-2` class to the element. Alias for `mb-md-2` prop.
     */
    mbMd2?: boolean
    /**
     * Add Bootstrap's `.ml-md-2` class to the element. Alias for `ml-md-2` prop.
     */
    mlMd2?: boolean
    /**
     * Add Bootstrap's `.m-md-3` class to the element. Alias for `m-md-3` prop.
     */
    mMd3?: boolean
    /**
     * Add Bootstrap's `.mt-md-3` class to the element. Alias for `mt-md-3` prop.
     */
    mtMd3?: boolean
    /**
     * Add Bootstrap's `.my-md-3` class to the element. Alias for `my-md-3` prop.
     */
    myMd3?: boolean
    /**
     * Add Bootstrap's `.mr-md-3` class to the element. Alias for `mr-md-3` prop.
     */
    mrMd3?: boolean
    /**
     * Add Bootstrap's `.mx-md-3` class to the element. Alias for `mx-md-3` prop.
     */
    mxMd3?: boolean
    /**
     * Add Bootstrap's `.mb-md-3` class to the element. Alias for `mb-md-3` prop.
     */
    mbMd3?: boolean
    /**
     * Add Bootstrap's `.ml-md-3` class to the element. Alias for `ml-md-3` prop.
     */
    mlMd3?: boolean
    /**
     * Add Bootstrap's `.m-md-4` class to the element. Alias for `m-md-4` prop.
     */
    mMd4?: boolean
    /**
     * Add Bootstrap's `.mt-md-4` class to the element. Alias for `mt-md-4` prop.
     */
    mtMd4?: boolean
    /**
     * Add Bootstrap's `.my-md-4` class to the element. Alias for `my-md-4` prop.
     */
    myMd4?: boolean
    /**
     * Add Bootstrap's `.mr-md-4` class to the element. Alias for `mr-md-4` prop.
     */
    mrMd4?: boolean
    /**
     * Add Bootstrap's `.mx-md-4` class to the element. Alias for `mx-md-4` prop.
     */
    mxMd4?: boolean
    /**
     * Add Bootstrap's `.mb-md-4` class to the element. Alias for `mb-md-4` prop.
     */
    mbMd4?: boolean
    /**
     * Add Bootstrap's `.ml-md-4` class to the element. Alias for `ml-md-4` prop.
     */
    mlMd4?: boolean
    /**
     * Add Bootstrap's `.m-md-5` class to the element. Alias for `m-md-5` prop.
     */
    mMd5?: boolean
    /**
     * Add Bootstrap's `.mt-md-5` class to the element. Alias for `mt-md-5` prop.
     */
    mtMd5?: boolean
    /**
     * Add Bootstrap's `.my-md-5` class to the element. Alias for `my-md-5` prop.
     */
    myMd5?: boolean
    /**
     * Add Bootstrap's `.mr-md-5` class to the element. Alias for `mr-md-5` prop.
     */
    mrMd5?: boolean
    /**
     * Add Bootstrap's `.mx-md-5` class to the element. Alias for `mx-md-5` prop.
     */
    mxMd5?: boolean
    /**
     * Add Bootstrap's `.mb-md-5` class to the element. Alias for `mb-md-5` prop.
     */
    mbMd5?: boolean
    /**
     * Add Bootstrap's `.ml-md-5` class to the element. Alias for `ml-md-5` prop.
     */
    mlMd5?: boolean
    /**
     * Add Bootstrap's `.p-md-0` class to the element. Alias for `p-md-0` prop.
     */
    pMd0?: boolean
    /**
     * Add Bootstrap's `.pt-md-0` class to the element. Alias for `pt-md-0` prop.
     */
    ptMd0?: boolean
    /**
     * Add Bootstrap's `.py-md-0` class to the element. Alias for `py-md-0` prop.
     */
    pyMd0?: boolean
    /**
     * Add Bootstrap's `.pr-md-0` class to the element. Alias for `pr-md-0` prop.
     */
    prMd0?: boolean
    /**
     * Add Bootstrap's `.px-md-0` class to the element. Alias for `px-md-0` prop.
     */
    pxMd0?: boolean
    /**
     * Add Bootstrap's `.pb-md-0` class to the element. Alias for `pb-md-0` prop.
     */
    pbMd0?: boolean
    /**
     * Add Bootstrap's `.pl-md-0` class to the element. Alias for `pl-md-0` prop.
     */
    plMd0?: boolean
    /**
     * Add Bootstrap's `.p-md-1` class to the element. Alias for `p-md-1` prop.
     */
    pMd1?: boolean
    /**
     * Add Bootstrap's `.pt-md-1` class to the element. Alias for `pt-md-1` prop.
     */
    ptMd1?: boolean
    /**
     * Add Bootstrap's `.py-md-1` class to the element. Alias for `py-md-1` prop.
     */
    pyMd1?: boolean
    /**
     * Add Bootstrap's `.pr-md-1` class to the element. Alias for `pr-md-1` prop.
     */
    prMd1?: boolean
    /**
     * Add Bootstrap's `.px-md-1` class to the element. Alias for `px-md-1` prop.
     */
    pxMd1?: boolean
    /**
     * Add Bootstrap's `.pb-md-1` class to the element. Alias for `pb-md-1` prop.
     */
    pbMd1?: boolean
    /**
     * Add Bootstrap's `.pl-md-1` class to the element. Alias for `pl-md-1` prop.
     */
    plMd1?: boolean
    /**
     * Add Bootstrap's `.p-md-2` class to the element. Alias for `p-md-2` prop.
     */
    pMd2?: boolean
    /**
     * Add Bootstrap's `.pt-md-2` class to the element. Alias for `pt-md-2` prop.
     */
    ptMd2?: boolean
    /**
     * Add Bootstrap's `.py-md-2` class to the element. Alias for `py-md-2` prop.
     */
    pyMd2?: boolean
    /**
     * Add Bootstrap's `.pr-md-2` class to the element. Alias for `pr-md-2` prop.
     */
    prMd2?: boolean
    /**
     * Add Bootstrap's `.px-md-2` class to the element. Alias for `px-md-2` prop.
     */
    pxMd2?: boolean
    /**
     * Add Bootstrap's `.pb-md-2` class to the element. Alias for `pb-md-2` prop.
     */
    pbMd2?: boolean
    /**
     * Add Bootstrap's `.pl-md-2` class to the element. Alias for `pl-md-2` prop.
     */
    plMd2?: boolean
    /**
     * Add Bootstrap's `.p-md-3` class to the element. Alias for `p-md-3` prop.
     */
    pMd3?: boolean
    /**
     * Add Bootstrap's `.pt-md-3` class to the element. Alias for `pt-md-3` prop.
     */
    ptMd3?: boolean
    /**
     * Add Bootstrap's `.py-md-3` class to the element. Alias for `py-md-3` prop.
     */
    pyMd3?: boolean
    /**
     * Add Bootstrap's `.pr-md-3` class to the element. Alias for `pr-md-3` prop.
     */
    prMd3?: boolean
    /**
     * Add Bootstrap's `.px-md-3` class to the element. Alias for `px-md-3` prop.
     */
    pxMd3?: boolean
    /**
     * Add Bootstrap's `.pb-md-3` class to the element. Alias for `pb-md-3` prop.
     */
    pbMd3?: boolean
    /**
     * Add Bootstrap's `.pl-md-3` class to the element. Alias for `pl-md-3` prop.
     */
    plMd3?: boolean
    /**
     * Add Bootstrap's `.p-md-4` class to the element. Alias for `p-md-4` prop.
     */
    pMd4?: boolean
    /**
     * Add Bootstrap's `.pt-md-4` class to the element. Alias for `pt-md-4` prop.
     */
    ptMd4?: boolean
    /**
     * Add Bootstrap's `.py-md-4` class to the element. Alias for `py-md-4` prop.
     */
    pyMd4?: boolean
    /**
     * Add Bootstrap's `.pr-md-4` class to the element. Alias for `pr-md-4` prop.
     */
    prMd4?: boolean
    /**
     * Add Bootstrap's `.px-md-4` class to the element. Alias for `px-md-4` prop.
     */
    pxMd4?: boolean
    /**
     * Add Bootstrap's `.pb-md-4` class to the element. Alias for `pb-md-4` prop.
     */
    pbMd4?: boolean
    /**
     * Add Bootstrap's `.pl-md-4` class to the element. Alias for `pl-md-4` prop.
     */
    plMd4?: boolean
    /**
     * Add Bootstrap's `.p-md-5` class to the element. Alias for `p-md-5` prop.
     */
    pMd5?: boolean
    /**
     * Add Bootstrap's `.pt-md-5` class to the element. Alias for `pt-md-5` prop.
     */
    ptMd5?: boolean
    /**
     * Add Bootstrap's `.py-md-5` class to the element. Alias for `py-md-5` prop.
     */
    pyMd5?: boolean
    /**
     * Add Bootstrap's `.pr-md-5` class to the element. Alias for `pr-md-5` prop.
     */
    prMd5?: boolean
    /**
     * Add Bootstrap's `.px-md-5` class to the element. Alias for `px-md-5` prop.
     */
    pxMd5?: boolean
    /**
     * Add Bootstrap's `.pb-md-5` class to the element. Alias for `pb-md-5` prop.
     */
    pbMd5?: boolean
    /**
     * Add Bootstrap's `.pl-md-5` class to the element. Alias for `pl-md-5` prop.
     */
    plMd5?: boolean
    /**
     * Add Bootstrap's `.m-md-n1` class to the element. Alias for `m-md-n1` prop.
     */
    mMdN1?: boolean
    /**
     * Add Bootstrap's `.mt-md-n1` class to the element. Alias for `mt-md-n1` prop.
     */
    mtMdN1?: boolean
    /**
     * Add Bootstrap's `.my-md-n1` class to the element. Alias for `my-md-n1` prop.
     */
    myMdN1?: boolean
    /**
     * Add Bootstrap's `.mr-md-n1` class to the element. Alias for `mr-md-n1` prop.
     */
    mrMdN1?: boolean
    /**
     * Add Bootstrap's `.mx-md-n1` class to the element. Alias for `mx-md-n1` prop.
     */
    mxMdN1?: boolean
    /**
     * Add Bootstrap's `.mb-md-n1` class to the element. Alias for `mb-md-n1` prop.
     */
    mbMdN1?: boolean
    /**
     * Add Bootstrap's `.ml-md-n1` class to the element. Alias for `ml-md-n1` prop.
     */
    mlMdN1?: boolean
    /**
     * Add Bootstrap's `.m-md-n2` class to the element. Alias for `m-md-n2` prop.
     */
    mMdN2?: boolean
    /**
     * Add Bootstrap's `.mt-md-n2` class to the element. Alias for `mt-md-n2` prop.
     */
    mtMdN2?: boolean
    /**
     * Add Bootstrap's `.my-md-n2` class to the element. Alias for `my-md-n2` prop.
     */
    myMdN2?: boolean
    /**
     * Add Bootstrap's `.mr-md-n2` class to the element. Alias for `mr-md-n2` prop.
     */
    mrMdN2?: boolean
    /**
     * Add Bootstrap's `.mx-md-n2` class to the element. Alias for `mx-md-n2` prop.
     */
    mxMdN2?: boolean
    /**
     * Add Bootstrap's `.mb-md-n2` class to the element. Alias for `mb-md-n2` prop.
     */
    mbMdN2?: boolean
    /**
     * Add Bootstrap's `.ml-md-n2` class to the element. Alias for `ml-md-n2` prop.
     */
    mlMdN2?: boolean
    /**
     * Add Bootstrap's `.m-md-n3` class to the element. Alias for `m-md-n3` prop.
     */
    mMdN3?: boolean
    /**
     * Add Bootstrap's `.mt-md-n3` class to the element. Alias for `mt-md-n3` prop.
     */
    mtMdN3?: boolean
    /**
     * Add Bootstrap's `.my-md-n3` class to the element. Alias for `my-md-n3` prop.
     */
    myMdN3?: boolean
    /**
     * Add Bootstrap's `.mr-md-n3` class to the element. Alias for `mr-md-n3` prop.
     */
    mrMdN3?: boolean
    /**
     * Add Bootstrap's `.mx-md-n3` class to the element. Alias for `mx-md-n3` prop.
     */
    mxMdN3?: boolean
    /**
     * Add Bootstrap's `.mb-md-n3` class to the element. Alias for `mb-md-n3` prop.
     */
    mbMdN3?: boolean
    /**
     * Add Bootstrap's `.ml-md-n3` class to the element. Alias for `ml-md-n3` prop.
     */
    mlMdN3?: boolean
    /**
     * Add Bootstrap's `.m-md-n4` class to the element. Alias for `m-md-n4` prop.
     */
    mMdN4?: boolean
    /**
     * Add Bootstrap's `.mt-md-n4` class to the element. Alias for `mt-md-n4` prop.
     */
    mtMdN4?: boolean
    /**
     * Add Bootstrap's `.my-md-n4` class to the element. Alias for `my-md-n4` prop.
     */
    myMdN4?: boolean
    /**
     * Add Bootstrap's `.mr-md-n4` class to the element. Alias for `mr-md-n4` prop.
     */
    mrMdN4?: boolean
    /**
     * Add Bootstrap's `.mx-md-n4` class to the element. Alias for `mx-md-n4` prop.
     */
    mxMdN4?: boolean
    /**
     * Add Bootstrap's `.mb-md-n4` class to the element. Alias for `mb-md-n4` prop.
     */
    mbMdN4?: boolean
    /**
     * Add Bootstrap's `.ml-md-n4` class to the element. Alias for `ml-md-n4` prop.
     */
    mlMdN4?: boolean
    /**
     * Add Bootstrap's `.m-md-n5` class to the element. Alias for `m-md-n5` prop.
     */
    mMdN5?: boolean
    /**
     * Add Bootstrap's `.mt-md-n5` class to the element. Alias for `mt-md-n5` prop.
     */
    mtMdN5?: boolean
    /**
     * Add Bootstrap's `.my-md-n5` class to the element. Alias for `my-md-n5` prop.
     */
    myMdN5?: boolean
    /**
     * Add Bootstrap's `.mr-md-n5` class to the element. Alias for `mr-md-n5` prop.
     */
    mrMdN5?: boolean
    /**
     * Add Bootstrap's `.mx-md-n5` class to the element. Alias for `mx-md-n5` prop.
     */
    mxMdN5?: boolean
    /**
     * Add Bootstrap's `.mb-md-n5` class to the element. Alias for `mb-md-n5` prop.
     */
    mbMdN5?: boolean
    /**
     * Add Bootstrap's `.ml-md-n5` class to the element. Alias for `ml-md-n5` prop.
     */
    mlMdN5?: boolean
    /**
     * Add Bootstrap's `.m-md-auto` class to the element. Alias for `m-md-auto` prop.
     */
    mMdAuto?: boolean
    /**
     * Add Bootstrap's `.mt-md-auto` class to the element. Alias for `mt-md-auto` prop.
     */
    mtMdAuto?: boolean
    /**
     * Add Bootstrap's `.my-md-auto` class to the element. Alias for `my-md-auto` prop.
     */
    myMdAuto?: boolean
    /**
     * Add Bootstrap's `.mr-md-auto` class to the element. Alias for `mr-md-auto` prop.
     */
    mrMdAuto?: boolean
    /**
     * Add Bootstrap's `.mx-md-auto` class to the element. Alias for `mx-md-auto` prop.
     */
    mxMdAuto?: boolean
    /**
     * Add Bootstrap's `.mb-md-auto` class to the element. Alias for `mb-md-auto` prop.
     */
    mbMdAuto?: boolean
    /**
     * Add Bootstrap's `.ml-md-auto` class to the element. Alias for `ml-md-auto` prop.
     */
    mlMdAuto?: boolean
    /**
     * Add Bootstrap's `.m-lg-0` class to the element. Alias for `m-lg-0` prop.
     */
    mLg0?: boolean
    /**
     * Add Bootstrap's `.mt-lg-0` class to the element. Alias for `mt-lg-0` prop.
     */
    mtLg0?: boolean
    /**
     * Add Bootstrap's `.my-lg-0` class to the element. Alias for `my-lg-0` prop.
     */
    myLg0?: boolean
    /**
     * Add Bootstrap's `.mr-lg-0` class to the element. Alias for `mr-lg-0` prop.
     */
    mrLg0?: boolean
    /**
     * Add Bootstrap's `.mx-lg-0` class to the element. Alias for `mx-lg-0` prop.
     */
    mxLg0?: boolean
    /**
     * Add Bootstrap's `.mb-lg-0` class to the element. Alias for `mb-lg-0` prop.
     */
    mbLg0?: boolean
    /**
     * Add Bootstrap's `.ml-lg-0` class to the element. Alias for `ml-lg-0` prop.
     */
    mlLg0?: boolean
    /**
     * Add Bootstrap's `.m-lg-1` class to the element. Alias for `m-lg-1` prop.
     */
    mLg1?: boolean
    /**
     * Add Bootstrap's `.mt-lg-1` class to the element. Alias for `mt-lg-1` prop.
     */
    mtLg1?: boolean
    /**
     * Add Bootstrap's `.my-lg-1` class to the element. Alias for `my-lg-1` prop.
     */
    myLg1?: boolean
    /**
     * Add Bootstrap's `.mr-lg-1` class to the element. Alias for `mr-lg-1` prop.
     */
    mrLg1?: boolean
    /**
     * Add Bootstrap's `.mx-lg-1` class to the element. Alias for `mx-lg-1` prop.
     */
    mxLg1?: boolean
    /**
     * Add Bootstrap's `.mb-lg-1` class to the element. Alias for `mb-lg-1` prop.
     */
    mbLg1?: boolean
    /**
     * Add Bootstrap's `.ml-lg-1` class to the element. Alias for `ml-lg-1` prop.
     */
    mlLg1?: boolean
    /**
     * Add Bootstrap's `.m-lg-2` class to the element. Alias for `m-lg-2` prop.
     */
    mLg2?: boolean
    /**
     * Add Bootstrap's `.mt-lg-2` class to the element. Alias for `mt-lg-2` prop.
     */
    mtLg2?: boolean
    /**
     * Add Bootstrap's `.my-lg-2` class to the element. Alias for `my-lg-2` prop.
     */
    myLg2?: boolean
    /**
     * Add Bootstrap's `.mr-lg-2` class to the element. Alias for `mr-lg-2` prop.
     */
    mrLg2?: boolean
    /**
     * Add Bootstrap's `.mx-lg-2` class to the element. Alias for `mx-lg-2` prop.
     */
    mxLg2?: boolean
    /**
     * Add Bootstrap's `.mb-lg-2` class to the element. Alias for `mb-lg-2` prop.
     */
    mbLg2?: boolean
    /**
     * Add Bootstrap's `.ml-lg-2` class to the element. Alias for `ml-lg-2` prop.
     */
    mlLg2?: boolean
    /**
     * Add Bootstrap's `.m-lg-3` class to the element. Alias for `m-lg-3` prop.
     */
    mLg3?: boolean
    /**
     * Add Bootstrap's `.mt-lg-3` class to the element. Alias for `mt-lg-3` prop.
     */
    mtLg3?: boolean
    /**
     * Add Bootstrap's `.my-lg-3` class to the element. Alias for `my-lg-3` prop.
     */
    myLg3?: boolean
    /**
     * Add Bootstrap's `.mr-lg-3` class to the element. Alias for `mr-lg-3` prop.
     */
    mrLg3?: boolean
    /**
     * Add Bootstrap's `.mx-lg-3` class to the element. Alias for `mx-lg-3` prop.
     */
    mxLg3?: boolean
    /**
     * Add Bootstrap's `.mb-lg-3` class to the element. Alias for `mb-lg-3` prop.
     */
    mbLg3?: boolean
    /**
     * Add Bootstrap's `.ml-lg-3` class to the element. Alias for `ml-lg-3` prop.
     */
    mlLg3?: boolean
    /**
     * Add Bootstrap's `.m-lg-4` class to the element. Alias for `m-lg-4` prop.
     */
    mLg4?: boolean
    /**
     * Add Bootstrap's `.mt-lg-4` class to the element. Alias for `mt-lg-4` prop.
     */
    mtLg4?: boolean
    /**
     * Add Bootstrap's `.my-lg-4` class to the element. Alias for `my-lg-4` prop.
     */
    myLg4?: boolean
    /**
     * Add Bootstrap's `.mr-lg-4` class to the element. Alias for `mr-lg-4` prop.
     */
    mrLg4?: boolean
    /**
     * Add Bootstrap's `.mx-lg-4` class to the element. Alias for `mx-lg-4` prop.
     */
    mxLg4?: boolean
    /**
     * Add Bootstrap's `.mb-lg-4` class to the element. Alias for `mb-lg-4` prop.
     */
    mbLg4?: boolean
    /**
     * Add Bootstrap's `.ml-lg-4` class to the element. Alias for `ml-lg-4` prop.
     */
    mlLg4?: boolean
    /**
     * Add Bootstrap's `.m-lg-5` class to the element. Alias for `m-lg-5` prop.
     */
    mLg5?: boolean
    /**
     * Add Bootstrap's `.mt-lg-5` class to the element. Alias for `mt-lg-5` prop.
     */
    mtLg5?: boolean
    /**
     * Add Bootstrap's `.my-lg-5` class to the element. Alias for `my-lg-5` prop.
     */
    myLg5?: boolean
    /**
     * Add Bootstrap's `.mr-lg-5` class to the element. Alias for `mr-lg-5` prop.
     */
    mrLg5?: boolean
    /**
     * Add Bootstrap's `.mx-lg-5` class to the element. Alias for `mx-lg-5` prop.
     */
    mxLg5?: boolean
    /**
     * Add Bootstrap's `.mb-lg-5` class to the element. Alias for `mb-lg-5` prop.
     */
    mbLg5?: boolean
    /**
     * Add Bootstrap's `.ml-lg-5` class to the element. Alias for `ml-lg-5` prop.
     */
    mlLg5?: boolean
    /**
     * Add Bootstrap's `.p-lg-0` class to the element. Alias for `p-lg-0` prop.
     */
    pLg0?: boolean
    /**
     * Add Bootstrap's `.pt-lg-0` class to the element. Alias for `pt-lg-0` prop.
     */
    ptLg0?: boolean
    /**
     * Add Bootstrap's `.py-lg-0` class to the element. Alias for `py-lg-0` prop.
     */
    pyLg0?: boolean
    /**
     * Add Bootstrap's `.pr-lg-0` class to the element. Alias for `pr-lg-0` prop.
     */
    prLg0?: boolean
    /**
     * Add Bootstrap's `.px-lg-0` class to the element. Alias for `px-lg-0` prop.
     */
    pxLg0?: boolean
    /**
     * Add Bootstrap's `.pb-lg-0` class to the element. Alias for `pb-lg-0` prop.
     */
    pbLg0?: boolean
    /**
     * Add Bootstrap's `.pl-lg-0` class to the element. Alias for `pl-lg-0` prop.
     */
    plLg0?: boolean
    /**
     * Add Bootstrap's `.p-lg-1` class to the element. Alias for `p-lg-1` prop.
     */
    pLg1?: boolean
    /**
     * Add Bootstrap's `.pt-lg-1` class to the element. Alias for `pt-lg-1` prop.
     */
    ptLg1?: boolean
    /**
     * Add Bootstrap's `.py-lg-1` class to the element. Alias for `py-lg-1` prop.
     */
    pyLg1?: boolean
    /**
     * Add Bootstrap's `.pr-lg-1` class to the element. Alias for `pr-lg-1` prop.
     */
    prLg1?: boolean
    /**
     * Add Bootstrap's `.px-lg-1` class to the element. Alias for `px-lg-1` prop.
     */
    pxLg1?: boolean
    /**
     * Add Bootstrap's `.pb-lg-1` class to the element. Alias for `pb-lg-1` prop.
     */
    pbLg1?: boolean
    /**
     * Add Bootstrap's `.pl-lg-1` class to the element. Alias for `pl-lg-1` prop.
     */
    plLg1?: boolean
    /**
     * Add Bootstrap's `.p-lg-2` class to the element. Alias for `p-lg-2` prop.
     */
    pLg2?: boolean
    /**
     * Add Bootstrap's `.pt-lg-2` class to the element. Alias for `pt-lg-2` prop.
     */
    ptLg2?: boolean
    /**
     * Add Bootstrap's `.py-lg-2` class to the element. Alias for `py-lg-2` prop.
     */
    pyLg2?: boolean
    /**
     * Add Bootstrap's `.pr-lg-2` class to the element. Alias for `pr-lg-2` prop.
     */
    prLg2?: boolean
    /**
     * Add Bootstrap's `.px-lg-2` class to the element. Alias for `px-lg-2` prop.
     */
    pxLg2?: boolean
    /**
     * Add Bootstrap's `.pb-lg-2` class to the element. Alias for `pb-lg-2` prop.
     */
    pbLg2?: boolean
    /**
     * Add Bootstrap's `.pl-lg-2` class to the element. Alias for `pl-lg-2` prop.
     */
    plLg2?: boolean
    /**
     * Add Bootstrap's `.p-lg-3` class to the element. Alias for `p-lg-3` prop.
     */
    pLg3?: boolean
    /**
     * Add Bootstrap's `.pt-lg-3` class to the element. Alias for `pt-lg-3` prop.
     */
    ptLg3?: boolean
    /**
     * Add Bootstrap's `.py-lg-3` class to the element. Alias for `py-lg-3` prop.
     */
    pyLg3?: boolean
    /**
     * Add Bootstrap's `.pr-lg-3` class to the element. Alias for `pr-lg-3` prop.
     */
    prLg3?: boolean
    /**
     * Add Bootstrap's `.px-lg-3` class to the element. Alias for `px-lg-3` prop.
     */
    pxLg3?: boolean
    /**
     * Add Bootstrap's `.pb-lg-3` class to the element. Alias for `pb-lg-3` prop.
     */
    pbLg3?: boolean
    /**
     * Add Bootstrap's `.pl-lg-3` class to the element. Alias for `pl-lg-3` prop.
     */
    plLg3?: boolean
    /**
     * Add Bootstrap's `.p-lg-4` class to the element. Alias for `p-lg-4` prop.
     */
    pLg4?: boolean
    /**
     * Add Bootstrap's `.pt-lg-4` class to the element. Alias for `pt-lg-4` prop.
     */
    ptLg4?: boolean
    /**
     * Add Bootstrap's `.py-lg-4` class to the element. Alias for `py-lg-4` prop.
     */
    pyLg4?: boolean
    /**
     * Add Bootstrap's `.pr-lg-4` class to the element. Alias for `pr-lg-4` prop.
     */
    prLg4?: boolean
    /**
     * Add Bootstrap's `.px-lg-4` class to the element. Alias for `px-lg-4` prop.
     */
    pxLg4?: boolean
    /**
     * Add Bootstrap's `.pb-lg-4` class to the element. Alias for `pb-lg-4` prop.
     */
    pbLg4?: boolean
    /**
     * Add Bootstrap's `.pl-lg-4` class to the element. Alias for `pl-lg-4` prop.
     */
    plLg4?: boolean
    /**
     * Add Bootstrap's `.p-lg-5` class to the element. Alias for `p-lg-5` prop.
     */
    pLg5?: boolean
    /**
     * Add Bootstrap's `.pt-lg-5` class to the element. Alias for `pt-lg-5` prop.
     */
    ptLg5?: boolean
    /**
     * Add Bootstrap's `.py-lg-5` class to the element. Alias for `py-lg-5` prop.
     */
    pyLg5?: boolean
    /**
     * Add Bootstrap's `.pr-lg-5` class to the element. Alias for `pr-lg-5` prop.
     */
    prLg5?: boolean
    /**
     * Add Bootstrap's `.px-lg-5` class to the element. Alias for `px-lg-5` prop.
     */
    pxLg5?: boolean
    /**
     * Add Bootstrap's `.pb-lg-5` class to the element. Alias for `pb-lg-5` prop.
     */
    pbLg5?: boolean
    /**
     * Add Bootstrap's `.pl-lg-5` class to the element. Alias for `pl-lg-5` prop.
     */
    plLg5?: boolean
    /**
     * Add Bootstrap's `.m-lg-n1` class to the element. Alias for `m-lg-n1` prop.
     */
    mLgN1?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n1` class to the element. Alias for `mt-lg-n1` prop.
     */
    mtLgN1?: boolean
    /**
     * Add Bootstrap's `.my-lg-n1` class to the element. Alias for `my-lg-n1` prop.
     */
    myLgN1?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n1` class to the element. Alias for `mr-lg-n1` prop.
     */
    mrLgN1?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n1` class to the element. Alias for `mx-lg-n1` prop.
     */
    mxLgN1?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n1` class to the element. Alias for `mb-lg-n1` prop.
     */
    mbLgN1?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n1` class to the element. Alias for `ml-lg-n1` prop.
     */
    mlLgN1?: boolean
    /**
     * Add Bootstrap's `.m-lg-n2` class to the element. Alias for `m-lg-n2` prop.
     */
    mLgN2?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n2` class to the element. Alias for `mt-lg-n2` prop.
     */
    mtLgN2?: boolean
    /**
     * Add Bootstrap's `.my-lg-n2` class to the element. Alias for `my-lg-n2` prop.
     */
    myLgN2?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n2` class to the element. Alias for `mr-lg-n2` prop.
     */
    mrLgN2?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n2` class to the element. Alias for `mx-lg-n2` prop.
     */
    mxLgN2?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n2` class to the element. Alias for `mb-lg-n2` prop.
     */
    mbLgN2?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n2` class to the element. Alias for `ml-lg-n2` prop.
     */
    mlLgN2?: boolean
    /**
     * Add Bootstrap's `.m-lg-n3` class to the element. Alias for `m-lg-n3` prop.
     */
    mLgN3?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n3` class to the element. Alias for `mt-lg-n3` prop.
     */
    mtLgN3?: boolean
    /**
     * Add Bootstrap's `.my-lg-n3` class to the element. Alias for `my-lg-n3` prop.
     */
    myLgN3?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n3` class to the element. Alias for `mr-lg-n3` prop.
     */
    mrLgN3?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n3` class to the element. Alias for `mx-lg-n3` prop.
     */
    mxLgN3?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n3` class to the element. Alias for `mb-lg-n3` prop.
     */
    mbLgN3?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n3` class to the element. Alias for `ml-lg-n3` prop.
     */
    mlLgN3?: boolean
    /**
     * Add Bootstrap's `.m-lg-n4` class to the element. Alias for `m-lg-n4` prop.
     */
    mLgN4?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n4` class to the element. Alias for `mt-lg-n4` prop.
     */
    mtLgN4?: boolean
    /**
     * Add Bootstrap's `.my-lg-n4` class to the element. Alias for `my-lg-n4` prop.
     */
    myLgN4?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n4` class to the element. Alias for `mr-lg-n4` prop.
     */
    mrLgN4?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n4` class to the element. Alias for `mx-lg-n4` prop.
     */
    mxLgN4?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n4` class to the element. Alias for `mb-lg-n4` prop.
     */
    mbLgN4?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n4` class to the element. Alias for `ml-lg-n4` prop.
     */
    mlLgN4?: boolean
    /**
     * Add Bootstrap's `.m-lg-n5` class to the element. Alias for `m-lg-n5` prop.
     */
    mLgN5?: boolean
    /**
     * Add Bootstrap's `.mt-lg-n5` class to the element. Alias for `mt-lg-n5` prop.
     */
    mtLgN5?: boolean
    /**
     * Add Bootstrap's `.my-lg-n5` class to the element. Alias for `my-lg-n5` prop.
     */
    myLgN5?: boolean
    /**
     * Add Bootstrap's `.mr-lg-n5` class to the element. Alias for `mr-lg-n5` prop.
     */
    mrLgN5?: boolean
    /**
     * Add Bootstrap's `.mx-lg-n5` class to the element. Alias for `mx-lg-n5` prop.
     */
    mxLgN5?: boolean
    /**
     * Add Bootstrap's `.mb-lg-n5` class to the element. Alias for `mb-lg-n5` prop.
     */
    mbLgN5?: boolean
    /**
     * Add Bootstrap's `.ml-lg-n5` class to the element. Alias for `ml-lg-n5` prop.
     */
    mlLgN5?: boolean
    /**
     * Add Bootstrap's `.m-lg-auto` class to the element. Alias for `m-lg-auto` prop.
     */
    mLgAuto?: boolean
    /**
     * Add Bootstrap's `.mt-lg-auto` class to the element. Alias for `mt-lg-auto` prop.
     */
    mtLgAuto?: boolean
    /**
     * Add Bootstrap's `.my-lg-auto` class to the element. Alias for `my-lg-auto` prop.
     */
    myLgAuto?: boolean
    /**
     * Add Bootstrap's `.mr-lg-auto` class to the element. Alias for `mr-lg-auto` prop.
     */
    mrLgAuto?: boolean
    /**
     * Add Bootstrap's `.mx-lg-auto` class to the element. Alias for `mx-lg-auto` prop.
     */
    mxLgAuto?: boolean
    /**
     * Add Bootstrap's `.mb-lg-auto` class to the element. Alias for `mb-lg-auto` prop.
     */
    mbLgAuto?: boolean
    /**
     * Add Bootstrap's `.ml-lg-auto` class to the element. Alias for `ml-lg-auto` prop.
     */
    mlLgAuto?: boolean
    /**
     * Add Bootstrap's `.m-xl-0` class to the element. Alias for `m-xl-0` prop.
     */
    mXl0?: boolean
    /**
     * Add Bootstrap's `.mt-xl-0` class to the element. Alias for `mt-xl-0` prop.
     */
    mtXl0?: boolean
    /**
     * Add Bootstrap's `.my-xl-0` class to the element. Alias for `my-xl-0` prop.
     */
    myXl0?: boolean
    /**
     * Add Bootstrap's `.mr-xl-0` class to the element. Alias for `mr-xl-0` prop.
     */
    mrXl0?: boolean
    /**
     * Add Bootstrap's `.mx-xl-0` class to the element. Alias for `mx-xl-0` prop.
     */
    mxXl0?: boolean
    /**
     * Add Bootstrap's `.mb-xl-0` class to the element. Alias for `mb-xl-0` prop.
     */
    mbXl0?: boolean
    /**
     * Add Bootstrap's `.ml-xl-0` class to the element. Alias for `ml-xl-0` prop.
     */
    mlXl0?: boolean
    /**
     * Add Bootstrap's `.m-xl-1` class to the element. Alias for `m-xl-1` prop.
     */
    mXl1?: boolean
    /**
     * Add Bootstrap's `.mt-xl-1` class to the element. Alias for `mt-xl-1` prop.
     */
    mtXl1?: boolean
    /**
     * Add Bootstrap's `.my-xl-1` class to the element. Alias for `my-xl-1` prop.
     */
    myXl1?: boolean
    /**
     * Add Bootstrap's `.mr-xl-1` class to the element. Alias for `mr-xl-1` prop.
     */
    mrXl1?: boolean
    /**
     * Add Bootstrap's `.mx-xl-1` class to the element. Alias for `mx-xl-1` prop.
     */
    mxXl1?: boolean
    /**
     * Add Bootstrap's `.mb-xl-1` class to the element. Alias for `mb-xl-1` prop.
     */
    mbXl1?: boolean
    /**
     * Add Bootstrap's `.ml-xl-1` class to the element. Alias for `ml-xl-1` prop.
     */
    mlXl1?: boolean
    /**
     * Add Bootstrap's `.m-xl-2` class to the element. Alias for `m-xl-2` prop.
     */
    mXl2?: boolean
    /**
     * Add Bootstrap's `.mt-xl-2` class to the element. Alias for `mt-xl-2` prop.
     */
    mtXl2?: boolean
    /**
     * Add Bootstrap's `.my-xl-2` class to the element. Alias for `my-xl-2` prop.
     */
    myXl2?: boolean
    /**
     * Add Bootstrap's `.mr-xl-2` class to the element. Alias for `mr-xl-2` prop.
     */
    mrXl2?: boolean
    /**
     * Add Bootstrap's `.mx-xl-2` class to the element. Alias for `mx-xl-2` prop.
     */
    mxXl2?: boolean
    /**
     * Add Bootstrap's `.mb-xl-2` class to the element. Alias for `mb-xl-2` prop.
     */
    mbXl2?: boolean
    /**
     * Add Bootstrap's `.ml-xl-2` class to the element. Alias for `ml-xl-2` prop.
     */
    mlXl2?: boolean
    /**
     * Add Bootstrap's `.m-xl-3` class to the element. Alias for `m-xl-3` prop.
     */
    mXl3?: boolean
    /**
     * Add Bootstrap's `.mt-xl-3` class to the element. Alias for `mt-xl-3` prop.
     */
    mtXl3?: boolean
    /**
     * Add Bootstrap's `.my-xl-3` class to the element. Alias for `my-xl-3` prop.
     */
    myXl3?: boolean
    /**
     * Add Bootstrap's `.mr-xl-3` class to the element. Alias for `mr-xl-3` prop.
     */
    mrXl3?: boolean
    /**
     * Add Bootstrap's `.mx-xl-3` class to the element. Alias for `mx-xl-3` prop.
     */
    mxXl3?: boolean
    /**
     * Add Bootstrap's `.mb-xl-3` class to the element. Alias for `mb-xl-3` prop.
     */
    mbXl3?: boolean
    /**
     * Add Bootstrap's `.ml-xl-3` class to the element. Alias for `ml-xl-3` prop.
     */
    mlXl3?: boolean
    /**
     * Add Bootstrap's `.m-xl-4` class to the element. Alias for `m-xl-4` prop.
     */
    mXl4?: boolean
    /**
     * Add Bootstrap's `.mt-xl-4` class to the element. Alias for `mt-xl-4` prop.
     */
    mtXl4?: boolean
    /**
     * Add Bootstrap's `.my-xl-4` class to the element. Alias for `my-xl-4` prop.
     */
    myXl4?: boolean
    /**
     * Add Bootstrap's `.mr-xl-4` class to the element. Alias for `mr-xl-4` prop.
     */
    mrXl4?: boolean
    /**
     * Add Bootstrap's `.mx-xl-4` class to the element. Alias for `mx-xl-4` prop.
     */
    mxXl4?: boolean
    /**
     * Add Bootstrap's `.mb-xl-4` class to the element. Alias for `mb-xl-4` prop.
     */
    mbXl4?: boolean
    /**
     * Add Bootstrap's `.ml-xl-4` class to the element. Alias for `ml-xl-4` prop.
     */
    mlXl4?: boolean
    /**
     * Add Bootstrap's `.m-xl-5` class to the element. Alias for `m-xl-5` prop.
     */
    mXl5?: boolean
    /**
     * Add Bootstrap's `.mt-xl-5` class to the element. Alias for `mt-xl-5` prop.
     */
    mtXl5?: boolean
    /**
     * Add Bootstrap's `.my-xl-5` class to the element. Alias for `my-xl-5` prop.
     */
    myXl5?: boolean
    /**
     * Add Bootstrap's `.mr-xl-5` class to the element. Alias for `mr-xl-5` prop.
     */
    mrXl5?: boolean
    /**
     * Add Bootstrap's `.mx-xl-5` class to the element. Alias for `mx-xl-5` prop.
     */
    mxXl5?: boolean
    /**
     * Add Bootstrap's `.mb-xl-5` class to the element. Alias for `mb-xl-5` prop.
     */
    mbXl5?: boolean
    /**
     * Add Bootstrap's `.ml-xl-5` class to the element. Alias for `ml-xl-5` prop.
     */
    mlXl5?: boolean
    /**
     * Add Bootstrap's `.p-xl-0` class to the element. Alias for `p-xl-0` prop.
     */
    pXl0?: boolean
    /**
     * Add Bootstrap's `.pt-xl-0` class to the element. Alias for `pt-xl-0` prop.
     */
    ptXl0?: boolean
    /**
     * Add Bootstrap's `.py-xl-0` class to the element. Alias for `py-xl-0` prop.
     */
    pyXl0?: boolean
    /**
     * Add Bootstrap's `.pr-xl-0` class to the element. Alias for `pr-xl-0` prop.
     */
    prXl0?: boolean
    /**
     * Add Bootstrap's `.px-xl-0` class to the element. Alias for `px-xl-0` prop.
     */
    pxXl0?: boolean
    /**
     * Add Bootstrap's `.pb-xl-0` class to the element. Alias for `pb-xl-0` prop.
     */
    pbXl0?: boolean
    /**
     * Add Bootstrap's `.pl-xl-0` class to the element. Alias for `pl-xl-0` prop.
     */
    plXl0?: boolean
    /**
     * Add Bootstrap's `.p-xl-1` class to the element. Alias for `p-xl-1` prop.
     */
    pXl1?: boolean
    /**
     * Add Bootstrap's `.pt-xl-1` class to the element. Alias for `pt-xl-1` prop.
     */
    ptXl1?: boolean
    /**
     * Add Bootstrap's `.py-xl-1` class to the element. Alias for `py-xl-1` prop.
     */
    pyXl1?: boolean
    /**
     * Add Bootstrap's `.pr-xl-1` class to the element. Alias for `pr-xl-1` prop.
     */
    prXl1?: boolean
    /**
     * Add Bootstrap's `.px-xl-1` class to the element. Alias for `px-xl-1` prop.
     */
    pxXl1?: boolean
    /**
     * Add Bootstrap's `.pb-xl-1` class to the element. Alias for `pb-xl-1` prop.
     */
    pbXl1?: boolean
    /**
     * Add Bootstrap's `.pl-xl-1` class to the element. Alias for `pl-xl-1` prop.
     */
    plXl1?: boolean
    /**
     * Add Bootstrap's `.p-xl-2` class to the element. Alias for `p-xl-2` prop.
     */
    pXl2?: boolean
    /**
     * Add Bootstrap's `.pt-xl-2` class to the element. Alias for `pt-xl-2` prop.
     */
    ptXl2?: boolean
    /**
     * Add Bootstrap's `.py-xl-2` class to the element. Alias for `py-xl-2` prop.
     */
    pyXl2?: boolean
    /**
     * Add Bootstrap's `.pr-xl-2` class to the element. Alias for `pr-xl-2` prop.
     */
    prXl2?: boolean
    /**
     * Add Bootstrap's `.px-xl-2` class to the element. Alias for `px-xl-2` prop.
     */
    pxXl2?: boolean
    /**
     * Add Bootstrap's `.pb-xl-2` class to the element. Alias for `pb-xl-2` prop.
     */
    pbXl2?: boolean
    /**
     * Add Bootstrap's `.pl-xl-2` class to the element. Alias for `pl-xl-2` prop.
     */
    plXl2?: boolean
    /**
     * Add Bootstrap's `.p-xl-3` class to the element. Alias for `p-xl-3` prop.
     */
    pXl3?: boolean
    /**
     * Add Bootstrap's `.pt-xl-3` class to the element. Alias for `pt-xl-3` prop.
     */
    ptXl3?: boolean
    /**
     * Add Bootstrap's `.py-xl-3` class to the element. Alias for `py-xl-3` prop.
     */
    pyXl3?: boolean
    /**
     * Add Bootstrap's `.pr-xl-3` class to the element. Alias for `pr-xl-3` prop.
     */
    prXl3?: boolean
    /**
     * Add Bootstrap's `.px-xl-3` class to the element. Alias for `px-xl-3` prop.
     */
    pxXl3?: boolean
    /**
     * Add Bootstrap's `.pb-xl-3` class to the element. Alias for `pb-xl-3` prop.
     */
    pbXl3?: boolean
    /**
     * Add Bootstrap's `.pl-xl-3` class to the element. Alias for `pl-xl-3` prop.
     */
    plXl3?: boolean
    /**
     * Add Bootstrap's `.p-xl-4` class to the element. Alias for `p-xl-4` prop.
     */
    pXl4?: boolean
    /**
     * Add Bootstrap's `.pt-xl-4` class to the element. Alias for `pt-xl-4` prop.
     */
    ptXl4?: boolean
    /**
     * Add Bootstrap's `.py-xl-4` class to the element. Alias for `py-xl-4` prop.
     */
    pyXl4?: boolean
    /**
     * Add Bootstrap's `.pr-xl-4` class to the element. Alias for `pr-xl-4` prop.
     */
    prXl4?: boolean
    /**
     * Add Bootstrap's `.px-xl-4` class to the element. Alias for `px-xl-4` prop.
     */
    pxXl4?: boolean
    /**
     * Add Bootstrap's `.pb-xl-4` class to the element. Alias for `pb-xl-4` prop.
     */
    pbXl4?: boolean
    /**
     * Add Bootstrap's `.pl-xl-4` class to the element. Alias for `pl-xl-4` prop.
     */
    plXl4?: boolean
    /**
     * Add Bootstrap's `.p-xl-5` class to the element. Alias for `p-xl-5` prop.
     */
    pXl5?: boolean
    /**
     * Add Bootstrap's `.pt-xl-5` class to the element. Alias for `pt-xl-5` prop.
     */
    ptXl5?: boolean
    /**
     * Add Bootstrap's `.py-xl-5` class to the element. Alias for `py-xl-5` prop.
     */
    pyXl5?: boolean
    /**
     * Add Bootstrap's `.pr-xl-5` class to the element. Alias for `pr-xl-5` prop.
     */
    prXl5?: boolean
    /**
     * Add Bootstrap's `.px-xl-5` class to the element. Alias for `px-xl-5` prop.
     */
    pxXl5?: boolean
    /**
     * Add Bootstrap's `.pb-xl-5` class to the element. Alias for `pb-xl-5` prop.
     */
    pbXl5?: boolean
    /**
     * Add Bootstrap's `.pl-xl-5` class to the element. Alias for `pl-xl-5` prop.
     */
    plXl5?: boolean
    /**
     * Add Bootstrap's `.m-xl-n1` class to the element. Alias for `m-xl-n1` prop.
     */
    mXlN1?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n1` class to the element. Alias for `mt-xl-n1` prop.
     */
    mtXlN1?: boolean
    /**
     * Add Bootstrap's `.my-xl-n1` class to the element. Alias for `my-xl-n1` prop.
     */
    myXlN1?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n1` class to the element. Alias for `mr-xl-n1` prop.
     */
    mrXlN1?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n1` class to the element. Alias for `mx-xl-n1` prop.
     */
    mxXlN1?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n1` class to the element. Alias for `mb-xl-n1` prop.
     */
    mbXlN1?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n1` class to the element. Alias for `ml-xl-n1` prop.
     */
    mlXlN1?: boolean
    /**
     * Add Bootstrap's `.m-xl-n2` class to the element. Alias for `m-xl-n2` prop.
     */
    mXlN2?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n2` class to the element. Alias for `mt-xl-n2` prop.
     */
    mtXlN2?: boolean
    /**
     * Add Bootstrap's `.my-xl-n2` class to the element. Alias for `my-xl-n2` prop.
     */
    myXlN2?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n2` class to the element. Alias for `mr-xl-n2` prop.
     */
    mrXlN2?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n2` class to the element. Alias for `mx-xl-n2` prop.
     */
    mxXlN2?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n2` class to the element. Alias for `mb-xl-n2` prop.
     */
    mbXlN2?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n2` class to the element. Alias for `ml-xl-n2` prop.
     */
    mlXlN2?: boolean
    /**
     * Add Bootstrap's `.m-xl-n3` class to the element. Alias for `m-xl-n3` prop.
     */
    mXlN3?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n3` class to the element. Alias for `mt-xl-n3` prop.
     */
    mtXlN3?: boolean
    /**
     * Add Bootstrap's `.my-xl-n3` class to the element. Alias for `my-xl-n3` prop.
     */
    myXlN3?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n3` class to the element. Alias for `mr-xl-n3` prop.
     */
    mrXlN3?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n3` class to the element. Alias for `mx-xl-n3` prop.
     */
    mxXlN3?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n3` class to the element. Alias for `mb-xl-n3` prop.
     */
    mbXlN3?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n3` class to the element. Alias for `ml-xl-n3` prop.
     */
    mlXlN3?: boolean
    /**
     * Add Bootstrap's `.m-xl-n4` class to the element. Alias for `m-xl-n4` prop.
     */
    mXlN4?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n4` class to the element. Alias for `mt-xl-n4` prop.
     */
    mtXlN4?: boolean
    /**
     * Add Bootstrap's `.my-xl-n4` class to the element. Alias for `my-xl-n4` prop.
     */
    myXlN4?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n4` class to the element. Alias for `mr-xl-n4` prop.
     */
    mrXlN4?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n4` class to the element. Alias for `mx-xl-n4` prop.
     */
    mxXlN4?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n4` class to the element. Alias for `mb-xl-n4` prop.
     */
    mbXlN4?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n4` class to the element. Alias for `ml-xl-n4` prop.
     */
    mlXlN4?: boolean
    /**
     * Add Bootstrap's `.m-xl-n5` class to the element. Alias for `m-xl-n5` prop.
     */
    mXlN5?: boolean
    /**
     * Add Bootstrap's `.mt-xl-n5` class to the element. Alias for `mt-xl-n5` prop.
     */
    mtXlN5?: boolean
    /**
     * Add Bootstrap's `.my-xl-n5` class to the element. Alias for `my-xl-n5` prop.
     */
    myXlN5?: boolean
    /**
     * Add Bootstrap's `.mr-xl-n5` class to the element. Alias for `mr-xl-n5` prop.
     */
    mrXlN5?: boolean
    /**
     * Add Bootstrap's `.mx-xl-n5` class to the element. Alias for `mx-xl-n5` prop.
     */
    mxXlN5?: boolean
    /**
     * Add Bootstrap's `.mb-xl-n5` class to the element. Alias for `mb-xl-n5` prop.
     */
    mbXlN5?: boolean
    /**
     * Add Bootstrap's `.ml-xl-n5` class to the element. Alias for `ml-xl-n5` prop.
     */
    mlXlN5?: boolean
    /**
     * Add Bootstrap's `.m-xl-auto` class to the element. Alias for `m-xl-auto` prop.
     */
    mXlAuto?: boolean
    /**
     * Add Bootstrap's `.mt-xl-auto` class to the element. Alias for `mt-xl-auto` prop.
     */
    mtXlAuto?: boolean
    /**
     * Add Bootstrap's `.my-xl-auto` class to the element. Alias for `my-xl-auto` prop.
     */
    myXlAuto?: boolean
    /**
     * Add Bootstrap's `.mr-xl-auto` class to the element. Alias for `mr-xl-auto` prop.
     */
    mrXlAuto?: boolean
    /**
     * Add Bootstrap's `.mx-xl-auto` class to the element. Alias for `mx-xl-auto` prop.
     */
    mxXlAuto?: boolean
    /**
     * Add Bootstrap's `.mb-xl-auto` class to the element. Alias for `mb-xl-auto` prop.
     */
    mbXlAuto?: boolean
    /**
     * Add Bootstrap's `.ml-xl-auto` class to the element. Alias for `ml-xl-auto` prop.
     */
    mlXlAuto?: boolean
    /**
     * Add Bootstrap's `.text-monospace` class to the element. Alias for `text-monospace` prop.
     */
    textMonospace?: boolean
    /**
     * Add Bootstrap's `.text-justify` class to the element. Alias for `text-justify` prop.
     */
    textJustify?: boolean
    /**
     * Add Bootstrap's `.text-wrap` class to the element. Alias for `text-wrap` prop.
     */
    textWrap?: boolean
    /**
     * Add Bootstrap's `.text-nowrap` class to the element. Alias for `text-nowrap` prop.
     */
    textNowrap?: boolean
    /**
     * Add Bootstrap's `.text-truncate` class to the element. Alias for `text-truncate` prop.
     */
    textTruncate?: boolean
    /**
     * Add Bootstrap's `.text-left` class to the element. Alias for `text-left` prop.
     */
    textLeft?: boolean
    /**
     * Add Bootstrap's `.text-right` class to the element. Alias for `text-right` prop.
     */
    textRight?: boolean
    /**
     * Add Bootstrap's `.text-center` class to the element. Alias for `text-center` prop.
     */
    textCenter?: boolean
    /**
     * Add Bootstrap's `.text-sm-left` class to the element. Alias for `text-sm-left` prop.
     */
    textSmLeft?: boolean
    /**
     * Add Bootstrap's `.text-sm-right` class to the element. Alias for `text-sm-right` prop.
     */
    textSmRight?: boolean
    /**
     * Add Bootstrap's `.text-sm-center` class to the element. Alias for `text-sm-center` prop.
     */
    textSmCenter?: boolean
    /**
     * Add Bootstrap's `.text-md-left` class to the element. Alias for `text-md-left` prop.
     */
    textMdLeft?: boolean
    /**
     * Add Bootstrap's `.text-md-right` class to the element. Alias for `text-md-right` prop.
     */
    textMdRight?: boolean
    /**
     * Add Bootstrap's `.text-md-center` class to the element. Alias for `text-md-center` prop.
     */
    textMdCenter?: boolean
    /**
     * Add Bootstrap's `.text-lg-left` class to the element. Alias for `text-lg-left` prop.
     */
    textLgLeft?: boolean
    /**
     * Add Bootstrap's `.text-lg-right` class to the element. Alias for `text-lg-right` prop.
     */
    textLgRight?: boolean
    /**
     * Add Bootstrap's `.text-lg-center` class to the element. Alias for `text-lg-center` prop.
     */
    textLgCenter?: boolean
    /**
     * Add Bootstrap's `.text-xl-left` class to the element. Alias for `text-xl-left` prop.
     */
    textXlLeft?: boolean
    /**
     * Add Bootstrap's `.text-xl-right` class to the element. Alias for `text-xl-right` prop.
     */
    textXlRight?: boolean
    /**
     * Add Bootstrap's `.text-xl-center` class to the element. Alias for `text-xl-center` prop.
     */
    textXlCenter?: boolean
    /**
     * Add Bootstrap's `.text-lowercase` class to the element. Alias for `text-lowercase` prop.
     */
    textLowercase?: boolean
    /**
     * Add Bootstrap's `.text-uppercase` class to the element. Alias for `text-uppercase` prop.
     */
    textUppercase?: boolean
    /**
     * Add Bootstrap's `.text-capitalize` class to the element. Alias for `text-capitalize` prop.
     */
    textCapitalize?: boolean
    /**
     * Add Bootstrap's `.font-weight-light` class to the element. Alias for `font-weight-light` prop.
     */
    fontWeightLight?: boolean
    /**
     * Add Bootstrap's `.font-weight-lighter` class to the element. Alias for `font-weight-lighter` prop.
     */
    fontWeightLighter?: boolean
    /**
     * Add Bootstrap's `.font-weight-normal` class to the element. Alias for `font-weight-normal` prop.
     */
    fontWeightNormal?: boolean
    /**
     * Add Bootstrap's `.font-weight-bold` class to the element. Alias for `font-weight-bold` prop.
     */
    fontWeightBold?: boolean
    /**
     * Add Bootstrap's `.font-weight-bolder` class to the element. Alias for `font-weight-bolder` prop.
     */
    fontWeightBolder?: boolean
    /**
     * Add Bootstrap's `.font-italic` class to the element. Alias for `font-italic` prop.
     */
    fontItalic?: boolean
    /**
     * Add Bootstrap's `.text-white` class to the element. Alias for `text-white` prop.
     */
    textWhite?: boolean
    /**
     * Add Bootstrap's `.text-primary` class to the element. Alias for `text-primary` prop.
     */
    textPrimary?: boolean
    /**
     * Add Bootstrap's `.text-secondary` class to the element. Alias for `text-secondary` prop.
     */
    textSecondary?: boolean
    /**
     * Add Bootstrap's `.text-success` class to the element. Alias for `text-success` prop.
     */
    textSuccess?: boolean
    /**
     * Add Bootstrap's `.text-info` class to the element. Alias for `text-info` prop.
     */
    textInfo?: boolean
    /**
     * Add Bootstrap's `.text-warning` class to the element. Alias for `text-warning` prop.
     */
    textWarning?: boolean
    /**
     * Add Bootstrap's `.text-danger` class to the element. Alias for `text-danger` prop.
     */
    textDanger?: boolean
    /**
     * Add Bootstrap's `.text-light` class to the element. Alias for `text-light` prop.
     */
    textLight?: boolean
    /**
     * Add Bootstrap's `.text-dark` class to the element. Alias for `text-dark` prop.
     */
    textDark?: boolean
    /**
     * Add Bootstrap's `.text-body` class to the element. Alias for `text-body` prop.
     */
    textBody?: boolean
    /**
     * Add Bootstrap's `.text-muted` class to the element. Alias for `text-muted` prop.
     */
    textMuted?: boolean
    /**
     * Add Bootstrap's `.text-black-50` class to the element. Alias for `text-black-50` prop.
     */
    textBlack50?: boolean
    /**
     * Add Bootstrap's `.text-white-50` class to the element. Alias for `text-white-50` prop.
     */
    textWhite50?: boolean
    /**
     * Add Bootstrap's `.text-hide` class to the element. Alias for `text-hide` prop.
     */
    textHide?: boolean
    /**
     * Add Bootstrap's `.text-decoration-none` class to the element. Alias for `text-decoration-none` prop.
     */
    textDecorationNone?: boolean
    /**
     * Add Bootstrap's `.text-break` class to the element. Alias for `text-break` prop.
     */
    textBreak?: boolean
    /**
     * Add Bootstrap's `.text-reset` class to the element. Alias for `text-reset` prop.
     */
    textReset?: boolean
  }
}