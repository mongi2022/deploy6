import { CommentDTO } from "./dto/comment.dto";
import { CommentService } from "./comment.service";
import { CommentEntity } from "./entity/comment.entity";
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getAllCommentController(): Promise<CommentEntity[]>;
    addCommentController(appDTO: CommentDTO): Promise<CommentEntity>;
    getCommentByIdController(id: number): Promise<CommentEntity>;
    updateCommentController(id: number, commentDto: CommentDTO): Promise<CommentEntity>;
    deleteComment(id: number): Promise<CommentEntity>;
}
