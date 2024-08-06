import React from 'react';
    import './ColorPicker.css';
    
    const ColorPicker = ({ color, onColorChange }) => {
        const colors = ['#ffffff',  '#f5f5f5','#d9eaff', '#ffd9d9', '#aaffff', '#ffffe5','#e5ffe6', '#e0e0e0'];
    
        const chunkArray = (array, chunkSize) => {
            const chunks = [];
            for (let i = 0; i < array.length; i += chunkSize) {
                chunks.push(array.slice(i, i + chunkSize));
            }
            return chunks;
        };
    
        const colorRows = chunkArray(colors, 2);
    
        return (
            <div className="color-picker">
                <div className="color-options">
                    {colorRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="color-row">
                            {row.map((c, colorIndex) => (
                                <div
                                    key={colorIndex}
                                    className={`color-option ${c === color ? 'selected' : ''}`}
                                    style={{ backgroundColor: c }}
                                    onClick={() => onColorChange(c)}
                                ></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

export default ColorPicker;
