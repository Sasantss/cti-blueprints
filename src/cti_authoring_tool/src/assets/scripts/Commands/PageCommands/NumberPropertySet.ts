import { PageCommand } from "../PageCommand";
import { NumberProperty } from "../../Page/Property";

export class NumberPropertySet extends PageCommand {

    /**
     * The property to modify.
     */
    private _property: NumberProperty;

    /**
     * The property's current value.
     */
    private _lastValue: number | null;

    /**
     * The property's new value.
     */
    private _nextValue: number | null;
    

    /**
     * Sets a number property's value.
     * @param property
     *  The number property.
     * @param value
     *  The property's new value.
     */
    constructor(property: NumberProperty, value: number | null) {
        super(property.getPageInstance());
        this._property = property;
        this._lastValue = property.value;
        this._nextValue = value;
    }
    

    /**
     * Executes the page command.
     * @returns
     *  True if the command should be recorded, false otherwise.
     */
    public execute(): boolean {
        this._property.setValue(this._nextValue);
        return true;
    }

    /**
     * Undoes the page command.
     */
    public undo() {
        this._property.setValue(this._lastValue);
    }

}