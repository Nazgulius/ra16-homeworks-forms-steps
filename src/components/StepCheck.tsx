import { useState } from 'react'
import React from 'react'

export default function StepCheck () {

    return (
        <>
        <form action="" className="form">
            <div className="form-block-in">
                <div className="in-date">
                    <label className="in-label" htmlFor="inLabel">Дата (ДД.ММ.ГГ)</label>
                    <input id="inLabel" type="text" className="in-input-date" />
                </div>
                <div className="in-distance">
                    <label className="in-distance" htmlFor="inDistance">Пройдено км</label>
                    <input id="inDistance" type="text" className="in-input-distance" />
                </div>
                <button className="btn-in">OK</button>
            </div>

            <div className="form-result">
                <div className="result-title">
                    <span className="span-date">Дата (ДД.ММ.ГГ)</span>
                    <span className="span-distance">Пройдено км</span>
                    <span className="span-actions">Действия</span>
                </div>
                <div className="result-out">
                    <div className="result-element">
                        <span className="element-date">30.03.25</span>
                        <span className="element-distance">10 км</span>
                        <div className="element-edit">
                            <button className="btn-edit">edit</button>
                            <button className="btn-delite">X</button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
        </>
    );
}