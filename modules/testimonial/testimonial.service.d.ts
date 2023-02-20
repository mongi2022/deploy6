import { Repository } from "typeorm";
import { TestimonialDTO } from "./dto/testimonial.dto";
import { TestimonialEntity } from "./entity/testimonial.entity";
export declare class TestimonialService {
    private readonly testimonialRepository;
    constructor(testimonialRepository: Repository<TestimonialEntity>);
    getAllTestimonial(): Promise<TestimonialEntity[]>;
    getTestimonialById(id: number): Promise<TestimonialEntity>;
    createTestimonial(data: TestimonialDTO): Promise<TestimonialEntity>;
    updateTestimonial(id: number, data: Partial<TestimonialDTO>): Promise<TestimonialEntity>;
    deleteTestimonial(id: number): Promise<TestimonialEntity>;
}
