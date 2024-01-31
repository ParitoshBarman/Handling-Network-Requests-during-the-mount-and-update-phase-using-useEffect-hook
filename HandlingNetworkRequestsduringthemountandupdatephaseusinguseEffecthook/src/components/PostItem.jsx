export default function PostItem(props){
    return (
        <div className="PostItem">
            {props.listData.map((itm, indx)=>{
                return (
                    <div key={itm.id}>
                        <p>{itm.id}</p>
                        <p>{itm.title}</p>
                    </div>
                );
            })}
        </div>
    );
} 