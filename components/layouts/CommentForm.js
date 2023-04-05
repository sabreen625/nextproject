import Card from '../ui/Card';
import classes from './CommentForm.module.css';
function CommentForm (){
    return (
        <Card>
        <form className={classes.form}>
        <div className={classes.control}>
          <h3 >Leave a Reply</h3>
          <div className={classes.control}>
            <textarea name="comment" placeholder="Comment" />
          </div>
          <div className={classes.control}>
            <input type="text"  placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className={classes.actions}>
            <button type="button">Post Comment</button>
          </div>
        </div>
        </form>
        </Card>
      );
    
};

export default CommentForm;