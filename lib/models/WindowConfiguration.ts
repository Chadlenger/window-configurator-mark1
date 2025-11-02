export class WindowConfiguration {
    private _type?: string;
    private _height?: number;
    private _width?: number;
    private _material?: string;
  
    constructor() {}
  
    get type(): string | undefined {return this._type;}
    get height(): number | undefined {return this._height;}
    get width(): number | undefined {return this._width;}
    get material(): string | undefined {return this._material;}
  
    set type(value: string | undefined) {this._type = value;}
    set height(value: number | undefined) {this._height = value;}
    set width(value: number | undefined) {this._width = value;}
    set material(value: string | undefined) {this._material = value;}
  
    isComplete(): boolean {return !!(
        this._type && this._height &&
        this._width && this._material
      );
    }
}