import { TestimonialDTO } from "./dto/testimonial.dto";
import { TestimonialService } from "./testimonial.service";
export declare class TestimonialController {
    private readonly testimonialService;
    constructor(testimonialService: TestimonialService);
    getAllTestimonial(): Promise<import("./entity/testimonial.entity").TestimonialEntity[]>;
    getTestimonialById(id: number): Promise<import("./entity/testimonial.entity").TestimonialEntity>;
    createTestimonial(testimonialDTO: TestimonialDTO): Promise<import("./entity/testimonial.entity").TestimonialEntity>;
    updateTestimonial(id: number, testimonialDTO: TestimonialDTO): Promise<import("./entity/testimonial.entity").TestimonialEntity>;
    deleteTestimonial(id: number): Promise<import("./entity/testimonial.entity").TestimonialEntity>;
}
