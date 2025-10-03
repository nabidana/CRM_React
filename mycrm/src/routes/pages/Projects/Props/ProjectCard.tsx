import { useRef } from "react";
import { DragSourceMonitor, useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from 'dnd-core';
import { ProjectCardProps } from "../ProjectsTypes";

interface DragItem{
    index : number;
    id : string;
    type : string;
    parentIndex : number;
}

const ProjectCard : React.FC<ProjectCardProps> = ({id, text, index, moveCard, parentIndex}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [{ handerId }, drop] = useDrop<
        DragItem,
        void,
        { handerId : Identifier | null}
    >({
        accept : 'card',
        collect(monitor){
            return{
                handerId : monitor.getHandlerId(),
            }
        },
        hover(item : DragItem, monitor) {
            if(!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;
            const sourceIndex = monitor.getItem().parentIndex;

            if( dragIndex === hoverIndex && sourceIndex === parentIndex) return;

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddelY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            if( dragIndex < hoverIndex && hoverClientY < hoverMiddelY) return;
            if( dragIndex > hoverIndex && hoverClientY > hoverMiddelY) return;
            
            moveCard(dragIndex, hoverIndex, sourceIndex, parentIndex);

            item.index = hoverIndex;
            item.parentIndex = parentIndex;
        },
    })

    const [{ isDragging } , drag] = useDrag({
        type : 'card',
        item : () => {
            return {id, index, parentIndex }
        },
        collect : (monitor : DragSourceMonitor) => ({
            isDragging : monitor.isDragging(),
        })
    })

    const opacity = isDragging ? 0.5 : 1;
    drag(drop(ref));
    
    return(
        <div ref={ref} style={{ opacity }} data-handler-id={handerId}>
            {text}
        </div>
    )
}

export default ProjectCard;