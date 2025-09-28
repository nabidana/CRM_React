import { useRef } from "react";
import { ProjectCardProps } from "../../../../types/CustomTypes";
import { useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from 'dnd-core';

interface DragItem{
    index : number;
    id : string;
    type : string;
}

const ProjectCard : React.FC<ProjectCardProps> = ({id, text, index, moveCard}) => {

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

            if( dragIndex === hoverIndex) return;

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddelY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            if( dragIndex < hoverIndex && hoverClientY < hoverMiddelY) return;
            if( dragIndex > hoverIndex && hoverClientY > hoverMiddelY) return;

            moveCard(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    })

    const [{ isDragging } , drag] = useDrag({
        type : 'card',
        item : () => {
            return {id, index }
        },
        collect : (monitor : any) => ({
            isDragging : monitor.isDragging(),
        })
    })

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    
    return(
        <div ref={ref} style={{ opacity }} data-handler-id={handerId}>
            {text}
        </div>
    )
}

export default ProjectCard;