export class WindowConfiguration {
    private _type?: string;
    private _height?: number;
    private _width?: number;
    private _material?: string;
    private _colorExterior?: string;
    private _colorInterior?: string;
  
    constructor() {}
  
    get type(): string | undefined {return this._type;}
    get height(): number | undefined {return this._height;}
    get width(): number | undefined {return this._width;}
    get material(): string | undefined {return this._material;}
    get colorExterior(): string | undefined {return this._colorExterior;}
    get colorInterior(): string | undefined {return this._colorInterior;}
  
    set type(value: string | undefined) {this._type = value;}
    set height(value: number | undefined) {this._height = value;}
    set width(value: number | undefined) {this._width = value;}
    set material(value: string | undefined) {this._material = value;}
    set colorExterior(value: string | undefined) {this._colorExterior = value;}
    set colorInterior(value: string | undefined) {this._colorInterior = value;}
  
    isComplete(): boolean {return !!(
        this._type && this._height &&
        this._width && this._material &&
        this._colorExterior && this._colorInterior
      );
    }
}