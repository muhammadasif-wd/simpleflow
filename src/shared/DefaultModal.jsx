import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function DefaultModal({ isOpen, onOpenChange, footer, size, title, body }) {
    return (
        <main>
            <Modal size={size ?? "2xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title ?? ""}</ModalHeader>
                            <ModalBody>
                                {body ?? 'Body is empty'}
                            </ModalBody>
                            {footer ? <ModalFooter>
                                {footer.close && <Button color="danger" variant="light" onPress={onClose}>
                                    {footer.closeName ?? "Close"}
                                </Button>}
                                {footer.action && <Button color="primary" onPress={onClose}>
                                    {footer.actionName ?? "Action"}
                                </Button>}
                            </ModalFooter> : ""}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </main>
    );
}
