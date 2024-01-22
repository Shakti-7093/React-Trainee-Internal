import React, { useState } from "react"
import "./DragDrop.css"
function DragDrop() {

    const [widget, setWidget] = useState<string[]>([])

    const handleDrag = (e: React.DragEvent, widgetType: string) => {
        e.dataTransfer.setData("widgetType", widgetType)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        console.log("widgetType", widgetType);
        setWidget([...widget, widgetType])

    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }

    return (
        <div>
            <div
                draggable
                onDragStart={(e) => handleDrag(e, "text")}
            >
                Text
            </div>
            <div
                draggable
                onDragStart={(e) => handleDrag(e, "image")}
            >
                Image
            </div>
            <div className="page" onDrop={handleDrop} onDragOver={handleDragOver}>
                {widget.map((item, index) => (
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DragDrop;
