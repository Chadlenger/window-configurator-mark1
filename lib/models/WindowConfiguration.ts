export class WindowConfiguration {
    private _type?: string;
    private _height?: number;
    private _width?: number;
    private _material?: string;
    private _colorExterior?: string;
    private _colorInterior?: string;
    private _numberOfPanels?: string;
    private _openingType?: string;
  
    constructor() {
        this._width = 200;
        this._height = 125;
    }
  
    get type(): string | undefined {return this._type;}
    get height(): number | undefined {return this._height;}
    get width(): number | undefined {return this._width;}
    get material(): string | undefined {return this._material;}
    get colorExterior(): string | undefined {return this._colorExterior;}
    get colorInterior(): string | undefined {return this._colorInterior;}
    get numberOfPanels(): string | undefined {return this._numberOfPanels;}
    get openingType(): string | undefined {return this._openingType;}
  
    set type(value: string | undefined) {this._type = value;}
    set height(value: number | undefined) {this._height = value;}
    set width(value: number | undefined) {this._width = value;}
    set material(value: string | undefined) {this._material = value;}
    set colorExterior(value: string | undefined) {this._colorExterior = value;}
    set colorInterior(value: string | undefined) {this._colorInterior = value;}
    set numberOfPanels(value: string | undefined) {this._numberOfPanels = value;}
    set openingType(value: string | undefined) {this._openingType = value;}
  
    isComplete(): boolean {
      // Vérifier les champs obligatoires de base
      const baseComplete = !!(
        this._type && this._height &&
        this._width && this._material &&
        this._colorExterior && this._colorInterior
      )
      if (!baseComplete) return false
      if (this._type === 'Usa Fereastra' || this._type === 'Fereastra fixa') {return true}
      // Pour les autres types, vérifier numberOfPanels et openingType
      if (!this._numberOfPanels) return false
      // openingType est requis seulement si des options d'ouverture existent
      return true
    }
}