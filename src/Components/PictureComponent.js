import myImage from "./images/king photo.jpg"

const user = {
name: "landscape-photo",
imageUrl: myImage,
imageSize:190

};

function PictureComponent(){
    return(

        <div className="picture">
            <h1>{user.name}</h1>
        <img
        className="landscape"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
        width:user.imageSize,
        height:user.imageSize
        }}
    
       />
      
        </div>
      )
}

export default PictureComponent;