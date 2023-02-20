import { Repository } from "typeorm";
import { CommentDTO } from "./dto/comment.dto";
import { CommentEntity } from "./entity/comment.entity";
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<CommentEntity>);
    getAllComment(): Promise<CommentEntity[]>;
    createComment(data: CommentDTO): Promise<CommentEntity>;
    getCommentById(id: number): Promise<CommentEntity>;
    updateComment(id: number, commentDto: Partial<CommentDTO>): Promise<CommentEntity>;
    deleteComment(id: number): Promise<CommentEntity>;
}
